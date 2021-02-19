import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts'

export declare class SyntaxException {
  line: number
  column: number
  message: string
  constructor (line: number, column: number, message: string);
}

export declare class ThrowingErrorListener implements ANTLRErrorListener<Token> {
  syntaxError (recognizer: Recognizer<Token, any>, offendingSymbol: Token, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): any;
}
