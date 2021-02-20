import { ApexLexer, ApexParser, CaseInsensitiveInputStream } from 'apex-parser'
import { CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import type { ApexParserListener } from 'apex-parser/lib/ApexParserListener'
import type { ElocData } from './types'

/** Class for detecting Executable Lines of Code. */
export class ElocDetector {
  /** Construct an instance of ElocDetector. */
  constructor (sourceContents: string = '', useApexParser: boolean = true) {
    this.sourceContents = sourceContents
    this.lines = []
    this.useApexParser = useApexParser

    this.rules = [
      // Class getter/setter annotation.
      /(get;)|(set;)/,
      // Method constructor/invocation.
      /\(.*/,
      // Generic variable assignments.
      /( =[\s'0-9a-zA-Z_])|(\+\+)/,
      // Method return (void returns are not considered executable).
      /return[ ;]/
    ]
    this.skipLibrary = {
      debugLine: /[Ss]ystem\.[Dd]ebug\(/,
      comment: {
        single: /^[\t ]*\/\//,
        multi: {
          start: /^[\t ]*\/\*/,
          end: /\*\/[\t ]*$/
        }
      },
      query: {
        start: /=*[ (]\[/,
        end: /][\s]*[)]*[.;]/
      },
      class: {
        standardVarDeclaration: /(public|private|final|static) .* = /,
        executableVarDeclaration: /(public|private|final|static) .* = (new|.*\(.*\))/,
        methodDeclaration: /(public|private|final|static) .*\(\) {.* = /
      },
      interface: {
        start: /interface /,
        end: /}/
      }
    }
  }

  useApexParser: boolean
  rules: RegExp[]
  skipLibrary: {
    debugLine: RegExp
    comment: {
      single: RegExp
      multi: {
        start: RegExp
        end: RegExp
      }
    }
    query: {
      start: RegExp
      end: RegExp
    }
    class: {
      standardVarDeclaration: RegExp
      executableVarDeclaration: RegExp
      methodDeclaration: RegExp
    }
    interface: {
      start: RegExp
      end: RegExp
    }
  }

  sourceContents: string
  lines: ElocData[]

  detect (): this {
    if (this.useApexParser) {
      this.detectWithApexParser()
    } else {
      this.detectWithRegexp()
    }

    return this
  }

  private detectWithApexParser (): void {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, this.sourceContents))
    const tokens = new CommonTokenStream(lexer)
    const parser = new ApexParser(tokens)
    const elocMap = new Map<number, ElocData>()
    const locator = (ctx: ParserRuleContext): void => {
      const int = ctx.start.line
      const len = Math.max(0, ctx.start.charPositionInLine) + ctx.start.text.length

      if (!elocMap.has(int)) {
        elocMap.set(int, { int, len })
      }
    }
    const listener: ApexParserListener = {
      enterConstructorDeclaration: locator,
      enterMethodDeclaration: locator,
      enterCreator: locator,
      enterGetter: locator,
      enterSetter: locator,
      enterMethodCall: locator,
      enterMethodCallExpression: locator,
      enterDotMethodCall: locator,
      enterNewExpression: locator,
      enterClassCreatorRest: locator,
      enterArrayCreatorRest: locator,
      enterNoRest: locator,
      enterMapCreatorRest: locator,
      enterMapCreatorRestPair: locator,
      enterSetCreatorRest: locator,
      enterStatement: locator
    }

    parser.addParseListener(listener)
    parser.compilationUnit()
  }

  private detectWithRegexp (): void {
    const lines = this.sourceContents.split('\n')
    let multiLineComment = false
    let soqlQuery = false
    let apexInterface = false

    lines.forEach((line, index) => {
      let skip = false

      if (this.skipLibrary.query.start.test(line)) {
        this.lines.push({
          int: index + 1,
          len: line.length
        })
        soqlQuery = true
      }

      if (this.skipLibrary.query.end.test(line)) {
        soqlQuery = false
      }

      if (this.skipLibrary.comment.multi.start.test(line)) {
        multiLineComment = true
      }

      if (this.skipLibrary.comment.multi.end.test(line)) {
        multiLineComment = false
      }

      if (this.skipLibrary.interface.start.test(line)) {
        apexInterface = true
      }

      if (this.skipLibrary.interface.end.test(line)) {
        apexInterface = false
      }

      if (
        apexInterface ||
        multiLineComment ||
        soqlQuery ||
        this.skipLibrary.comment.single.test(line) ||
        this.skipLibrary.debugLine.test(line) ||
        (this.skipLibrary.class.standardVarDeclaration.test(line) &&
          !(
            this.skipLibrary.class.executableVarDeclaration.test(line) ||
            this.skipLibrary.class.methodDeclaration.test(line)
          ))
      ) {
        skip = true
      }

      this.rules.forEach(rule => {
        if (!skip && rule.test(line)) {
          this.lines.push({
            int: index + 1,
            len: line.length
          })
          skip = true
        }
      })
    })
  }
}
