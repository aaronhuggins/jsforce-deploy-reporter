import { ATN } from 'antlr4ts/atn/ATN'
import { CharStream } from 'antlr4ts/CharStream'
import { Lexer } from 'antlr4ts/Lexer'
import { Vocabulary } from 'antlr4ts/Vocabulary'

export declare class ApexLexer extends Lexer {
  static readonly ABSTRACT = 1
  static readonly AFTER = 2
  static readonly BEFORE = 3
  static readonly BREAK = 4
  static readonly CATCH = 5
  static readonly CLASS = 6
  static readonly CONTINUE = 7
  static readonly DELETE = 8
  static readonly DO = 9
  static readonly ELSE = 10
  static readonly ENUM = 11
  static readonly EXTENDS = 12
  static readonly FINAL = 13
  static readonly FINALLY = 14
  static readonly FOR = 15
  static readonly GET = 16
  static readonly GLOBAL = 17
  static readonly IF = 18
  static readonly IMPLEMENTS = 19
  static readonly INHERITED = 20
  static readonly INSERT = 21
  static readonly INSTANCEOF = 22
  static readonly INTERFACE = 23
  static readonly MERGE = 24
  static readonly NEW = 25
  static readonly NULL = 26
  static readonly ON = 27
  static readonly OVERRIDE = 28
  static readonly PRIVATE = 29
  static readonly PROTECTED = 30
  static readonly PUBLIC = 31
  static readonly RETURN = 32
  static readonly SYSTEMRUNAS = 33
  static readonly SET = 34
  static readonly SHARING = 35
  static readonly STATIC = 36
  static readonly SUPER = 37
  static readonly SWITCH = 38
  static readonly TESTMETHOD = 39
  static readonly THIS = 40
  static readonly THROW = 41
  static readonly TRANSIENT = 42
  static readonly TRIGGER = 43
  static readonly TRY = 44
  static readonly UNDELETE = 45
  static readonly UPDATE = 46
  static readonly UPSERT = 47
  static readonly VIRTUAL = 48
  static readonly VOID = 49
  static readonly WEBSERVICE = 50
  static readonly WHEN = 51
  static readonly WHILE = 52
  static readonly WITH = 53
  static readonly WITHOUT = 54
  static readonly LIST = 55
  static readonly MAP = 56
  static readonly SELECT = 57
  static readonly COUNT = 58
  static readonly FROM = 59
  static readonly AS = 60
  static readonly USING = 61
  static readonly SCOPE = 62
  static readonly WHERE = 63
  static readonly ORDER = 64
  static readonly BY = 65
  static readonly LIMIT = 66
  static readonly SOQLAND = 67
  static readonly SOQLOR = 68
  static readonly NOT = 69
  static readonly AVG = 70
  static readonly COUNT_DISTINCT = 71
  static readonly MIN = 72
  static readonly MAX = 73
  static readonly SUM = 74
  static readonly TYPEOF = 75
  static readonly END = 76
  static readonly THEN = 77
  static readonly LIKE = 78
  static readonly IN = 79
  static readonly INCLUDES = 80
  static readonly EXCLUDES = 81
  static readonly ASC = 82
  static readonly DESC = 83
  static readonly NULLS = 84
  static readonly FIRST = 85
  static readonly LAST = 86
  static readonly GROUP = 87
  static readonly ALL = 88
  static readonly ROWS = 89
  static readonly VIEW = 90
  static readonly HAVING = 91
  static readonly ROLLUP = 92
  static readonly TOLABEL = 93
  static readonly OFFSET = 94
  static readonly DATA = 95
  static readonly CATEGORY = 96
  static readonly AT = 97
  static readonly ABOVE = 98
  static readonly BELOW = 99
  static readonly ABOVE_OR_BELOW = 100
  static readonly SECURITY_ENFORCED = 101
  static readonly REFERENCE = 102
  static readonly CUBE = 103
  static readonly FORMAT = 104
  static readonly YESTERDAY = 105
  static readonly TODAY = 106
  static readonly TOMORROW = 107
  static readonly LAST_WEEK = 108
  static readonly THIS_WEEK = 109
  static readonly NEXT_WEEK = 110
  static readonly LAST_MONTH = 111
  static readonly THIS_MONTH = 112
  static readonly NEXT_MONTH = 113
  static readonly LAST_90_DAYS = 114
  static readonly NEXT_90_DAYS = 115
  static readonly LAST_N_DAYS_N = 116
  static readonly NEXT_N_DAYS_N = 117
  static readonly NEXT_N_WEEKS_N = 118
  static readonly LAST_N_WEEKS_N = 119
  static readonly NEXT_N_MONTHS_N = 120
  static readonly LAST_N_MONTHS_N = 121
  static readonly THIS_QUARTER = 122
  static readonly LAST_QUARTER = 123
  static readonly NEXT_QUARTER = 124
  static readonly NEXT_N_QUARTERS_N = 125
  static readonly LAST_N_QUARTERS_N = 126
  static readonly THIS_YEAR = 127
  static readonly LAST_YEAR = 128
  static readonly NEXT_YEAR = 129
  static readonly NEXT_N_YEARS_N = 130
  static readonly LAST_N_YEARS_N = 131
  static readonly THIS_FISCAL_QUARTER = 132
  static readonly LAST_FISCAL_QUARTER = 133
  static readonly NEXT_FISCAL_QUARTER = 134
  static readonly NEXT_N_FISCAL_QUARTERS_N = 135
  static readonly LAST_N_FISCAL_QUARTERS_N = 136
  static readonly THIS_FISCAL_YEAR = 137
  static readonly LAST_FISCAL_YEAR = 138
  static readonly NEXT_FISCAL_YEAR = 139
  static readonly NEXT_N_FISCAL_YEARS_N = 140
  static readonly LAST_N_FISCAL_YEARS_N = 141
  static readonly DateLiteral = 142
  static readonly DateTimeLiteral = 143
  static readonly IntegerLiteral = 144
  static readonly LongLiteral = 145
  static readonly NumberLiteral = 146
  static readonly BooleanLiteral = 147
  static readonly StringLiteral = 148
  static readonly NullLiteral = 149
  static readonly LPAREN = 150
  static readonly RPAREN = 151
  static readonly LBRACE = 152
  static readonly RBRACE = 153
  static readonly LBRACK = 154
  static readonly RBRACK = 155
  static readonly SEMI = 156
  static readonly COMMA = 157
  static readonly DOT = 158
  static readonly ASSIGN = 159
  static readonly GT = 160
  static readonly LT = 161
  static readonly BANG = 162
  static readonly TILDE = 163
  static readonly QUESTION = 164
  static readonly QUESTIONDOT = 165
  static readonly COLON = 166
  static readonly EQUAL = 167
  static readonly TRIPLEEQUAL = 168
  static readonly NOTEQUAL = 169
  static readonly LESSANDGREATER = 170
  static readonly TRIPLENOTEQUAL = 171
  static readonly AND = 172
  static readonly OR = 173
  static readonly INC = 174
  static readonly DEC = 175
  static readonly ADD = 176
  static readonly SUB = 177
  static readonly MUL = 178
  static readonly DIV = 179
  static readonly BITAND = 180
  static readonly BITOR = 181
  static readonly CARET = 182
  static readonly MOD = 183
  static readonly MAPTO = 184
  static readonly ADD_ASSIGN = 185
  static readonly SUB_ASSIGN = 186
  static readonly MUL_ASSIGN = 187
  static readonly DIV_ASSIGN = 188
  static readonly AND_ASSIGN = 189
  static readonly OR_ASSIGN = 190
  static readonly XOR_ASSIGN = 191
  static readonly MOD_ASSIGN = 192
  static readonly LSHIFT_ASSIGN = 193
  static readonly RSHIFT_ASSIGN = 194
  static readonly URSHIFT_ASSIGN = 195
  static readonly ATSIGN = 196
  static readonly Identifier = 197
  static readonly WS = 198
  static readonly DOC_COMMENT = 199
  static readonly COMMENT = 200
  static readonly LINE_COMMENT = 201
  static readonly WHITESPACE_CHANNEL = 2
  static readonly COMMENT_CHANNEL = 3
  static readonly channelNames: string[]
  static readonly modeNames: string[]
  static readonly ruleNames: string[]
  private static readonly _LITERAL_NAMES
  private static readonly _SYMBOLIC_NAMES
  static readonly VOCABULARY: Vocabulary
  get vocabulary (): Vocabulary;
  constructor (input: CharStream);
  get grammarFileName (): string;
  get ruleNames (): string[];
  get serializedATN (): string;
  get channelNames (): string[];
  get modeNames (): string[];
  private static readonly _serializedATNSegments
  private static readonly _serializedATNSegment0
  private static readonly _serializedATNSegment1
  private static readonly _serializedATNSegment2
  private static readonly _serializedATNSegment3
  static readonly _serializedATN: string
  static __ATN: ATN
  static get _ATN (): ATN;
}
