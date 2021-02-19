import { ANTLRInputStream } from 'antlr4ts'

export declare class CaseInsensitiveInputStream extends ANTLRInputStream {
  userData: any
  constructor (userData: any, input: string);
  LA (i: number): number;
  toLower (c: number): number;
}
