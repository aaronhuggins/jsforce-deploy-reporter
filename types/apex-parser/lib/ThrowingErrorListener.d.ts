declare module 'apex-parser/lib/ThrowingErrorListener' {
  import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts'

  export class SyntaxException {
    line: number
    column: number
    message: string
    constructor (line: number, column: number, message: string);
  }

  export class ThrowingErrorListener implements ANTLRErrorListener<Token> {
    syntaxError (recognizer: Recognizer<Token, any>, offendingSymbol: Token, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): any;
  }
}
