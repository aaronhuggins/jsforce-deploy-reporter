declare module 'apex-parser' {
  export * from 'apex-parser/lib/ApexLexer'
  export * from 'apex-parser/lib/ApexParser'
  export * from 'apex-parser/lib/CaseInsensitiveInputStream'
  export * from 'apex-parser/lib/ThrowingErrorListener'

  export function check (): void
}
