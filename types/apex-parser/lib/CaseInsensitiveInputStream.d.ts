declare module 'apex-parser/lib/CaseInsensitiveInputStream' {
  import { ANTLRInputStream } from 'antlr4ts'

  export class CaseInsensitiveInputStream extends ANTLRInputStream {
    userData: any
    constructor (userData: any, input?: string);
    LA (i: number): number;
    toLower (c: number): number;
  }
}
