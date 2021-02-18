export type CoverageType = 'Class' | 'Trigger'

export interface ElocLine {
  int: number
  hit?: number
  len: number
}
