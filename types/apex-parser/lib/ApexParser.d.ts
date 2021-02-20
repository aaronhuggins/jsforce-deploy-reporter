declare module 'apex-parser/lib/ApexParser' {
  import { ATN } from 'antlr4ts/atn/ATN'
  import { Parser } from 'antlr4ts/Parser'
  import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
  import { RuleContext } from 'antlr4ts/RuleContext'
  import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
  import { TokenStream } from 'antlr4ts/TokenStream'
  import { Vocabulary } from 'antlr4ts/Vocabulary'
  import { ApexParserListener } from 'apex-parser/lib/ApexParserListener'
  import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor'

  export class ApexParser extends Parser {
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
    static readonly RULE_triggerUnit = 0
    static readonly RULE_triggerCase = 1
    static readonly RULE_compilationUnit = 2
    static readonly RULE_typeDeclaration = 3
    static readonly RULE_classDeclaration = 4
    static readonly RULE_enumDeclaration = 5
    static readonly RULE_enumConstants = 6
    static readonly RULE_interfaceDeclaration = 7
    static readonly RULE_typeList = 8
    static readonly RULE_classBody = 9
    static readonly RULE_interfaceBody = 10
    static readonly RULE_classBodyDeclaration = 11
    static readonly RULE_modifier = 12
    static readonly RULE_memberDeclaration = 13
    static readonly RULE_methodDeclaration = 14
    static readonly RULE_constructorDeclaration = 15
    static readonly RULE_fieldDeclaration = 16
    static readonly RULE_propertyDeclaration = 17
    static readonly RULE_interfaceMethodDeclaration = 18
    static readonly RULE_variableDeclarators = 19
    static readonly RULE_variableDeclarator = 20
    static readonly RULE_arrayInitializer = 21
    static readonly RULE_typeRef = 22
    static readonly RULE_arraySubscripts = 23
    static readonly RULE_typeName = 24
    static readonly RULE_typeArguments = 25
    static readonly RULE_formalParameters = 26
    static readonly RULE_formalParameterList = 27
    static readonly RULE_formalParameter = 28
    static readonly RULE_qualifiedName = 29
    static readonly RULE_literal = 30
    static readonly RULE_annotation = 31
    static readonly RULE_elementValuePairs = 32
    static readonly RULE_elementValuePair = 33
    static readonly RULE_elementValue = 34
    static readonly RULE_elementValueArrayInitializer = 35
    static readonly RULE_block = 36
    static readonly RULE_localVariableDeclarationStatement = 37
    static readonly RULE_localVariableDeclaration = 38
    static readonly RULE_statement = 39
    static readonly RULE_ifStatement = 40
    static readonly RULE_switchStatement = 41
    static readonly RULE_whenControl = 42
    static readonly RULE_whenValue = 43
    static readonly RULE_whenLiteral = 44
    static readonly RULE_forStatement = 45
    static readonly RULE_whileStatement = 46
    static readonly RULE_doWhileStatement = 47
    static readonly RULE_tryStatement = 48
    static readonly RULE_returnStatement = 49
    static readonly RULE_throwStatement = 50
    static readonly RULE_breakStatement = 51
    static readonly RULE_continueStatement = 52
    static readonly RULE_insertStatement = 53
    static readonly RULE_updateStatement = 54
    static readonly RULE_deleteStatement = 55
    static readonly RULE_undeleteStatement = 56
    static readonly RULE_upsertStatement = 57
    static readonly RULE_mergeStatement = 58
    static readonly RULE_runAsStatement = 59
    static readonly RULE_expressionStatement = 60
    static readonly RULE_propertyBlock = 61
    static readonly RULE_getter = 62
    static readonly RULE_setter = 63
    static readonly RULE_catchClause = 64
    static readonly RULE_finallyBlock = 65
    static readonly RULE_forControl = 66
    static readonly RULE_forInit = 67
    static readonly RULE_enhancedForControl = 68
    static readonly RULE_forUpdate = 69
    static readonly RULE_parExpression = 70
    static readonly RULE_expressionList = 71
    static readonly RULE_expression = 72
    static readonly RULE_primary = 73
    static readonly RULE_methodCall = 74
    static readonly RULE_dotMethodCall = 75
    static readonly RULE_creator = 76
    static readonly RULE_createdName = 77
    static readonly RULE_idCreatedNamePair = 78
    static readonly RULE_noRest = 79
    static readonly RULE_classCreatorRest = 80
    static readonly RULE_arrayCreatorRest = 81
    static readonly RULE_mapCreatorRest = 82
    static readonly RULE_mapCreatorRestPair = 83
    static readonly RULE_setCreatorRest = 84
    static readonly RULE_arguments = 85
    static readonly RULE_soqlLiteral = 86
    static readonly RULE_query = 87
    static readonly RULE_subQuery = 88
    static readonly RULE_selectList = 89
    static readonly RULE_selectEntry = 90
    static readonly RULE_fieldName = 91
    static readonly RULE_fromNameList = 92
    static readonly RULE_subFieldList = 93
    static readonly RULE_subFieldEntry = 94
    static readonly RULE_soqlFunction = 95
    static readonly RULE_typeOf = 96
    static readonly RULE_whenClause = 97
    static readonly RULE_elseClause = 98
    static readonly RULE_fieldNameList = 99
    static readonly RULE_usingScope = 100
    static readonly RULE_whereClause = 101
    static readonly RULE_logicalExpression = 102
    static readonly RULE_conditionalExpression = 103
    static readonly RULE_fieldExpression = 104
    static readonly RULE_comparisonOperator = 105
    static readonly RULE_value = 106
    static readonly RULE_valueList = 107
    static readonly RULE_currencyValue = 108
    static readonly RULE_withClause = 109
    static readonly RULE_filteringExpression = 110
    static readonly RULE_dataCategorySelection = 111
    static readonly RULE_dataCategoryName = 112
    static readonly RULE_filteringSelector = 113
    static readonly RULE_groupByClause = 114
    static readonly RULE_orderByClause = 115
    static readonly RULE_fieldOrderList = 116
    static readonly RULE_fieldOrder = 117
    static readonly RULE_limitClause = 118
    static readonly RULE_offsetClause = 119
    static readonly RULE_allRowsClause = 120
    static readonly RULE_forClauses = 121
    static readonly RULE_boundExpression = 122
    static readonly RULE_dateFormula = 123
    static readonly RULE_signedInteger = 124
    static readonly RULE_soqlId = 125
    static readonly RULE_id = 126
    static readonly RULE_anyId = 127
    static readonly ruleNames: string[]
    private static readonly _LITERAL_NAMES
    private static readonly _SYMBOLIC_NAMES
    static readonly VOCABULARY: Vocabulary
    get vocabulary (): Vocabulary;
    get grammarFileName (): string;
    get ruleNames (): string[];
    get serializedATN (): string;
    constructor (input: TokenStream);
    triggerUnit (): TriggerUnitContext;
    triggerCase (): TriggerCaseContext;
    compilationUnit (): CompilationUnitContext;
    typeDeclaration (): TypeDeclarationContext;
    classDeclaration (): ClassDeclarationContext;
    enumDeclaration (): EnumDeclarationContext;
    enumConstants (): EnumConstantsContext;
    interfaceDeclaration (): InterfaceDeclarationContext;
    typeList (): TypeListContext;
    classBody (): ClassBodyContext;
    interfaceBody (): InterfaceBodyContext;
    classBodyDeclaration (): ClassBodyDeclarationContext;
    modifier (): ModifierContext;
    memberDeclaration (): MemberDeclarationContext;
    methodDeclaration (): MethodDeclarationContext;
    constructorDeclaration (): ConstructorDeclarationContext;
    fieldDeclaration (): FieldDeclarationContext;
    propertyDeclaration (): PropertyDeclarationContext;
    interfaceMethodDeclaration (): InterfaceMethodDeclarationContext;
    variableDeclarators (): VariableDeclaratorsContext;
    variableDeclarator (): VariableDeclaratorContext;
    arrayInitializer (): ArrayInitializerContext;
    typeRef (): TypeRefContext;
    arraySubscripts (): ArraySubscriptsContext;
    typeName (): TypeNameContext;
    typeArguments (): TypeArgumentsContext;
    formalParameters (): FormalParametersContext;
    formalParameterList (): FormalParameterListContext;
    formalParameter (): FormalParameterContext;
    qualifiedName (): QualifiedNameContext;
    literal (): LiteralContext;
    annotation (): AnnotationContext;
    elementValuePairs (): ElementValuePairsContext;
    elementValuePair (): ElementValuePairContext;
    elementValue (): ElementValueContext;
    elementValueArrayInitializer (): ElementValueArrayInitializerContext;
    block (): BlockContext;
    localVariableDeclarationStatement (): LocalVariableDeclarationStatementContext;
    localVariableDeclaration (): LocalVariableDeclarationContext;
    statement (): StatementContext;
    ifStatement (): IfStatementContext;
    switchStatement (): SwitchStatementContext;
    whenControl (): WhenControlContext;
    whenValue (): WhenValueContext;
    whenLiteral (): WhenLiteralContext;
    forStatement (): ForStatementContext;
    whileStatement (): WhileStatementContext;
    doWhileStatement (): DoWhileStatementContext;
    tryStatement (): TryStatementContext;
    returnStatement (): ReturnStatementContext;
    throwStatement (): ThrowStatementContext;
    breakStatement (): BreakStatementContext;
    continueStatement (): ContinueStatementContext;
    insertStatement (): InsertStatementContext;
    updateStatement (): UpdateStatementContext;
    deleteStatement (): DeleteStatementContext;
    undeleteStatement (): UndeleteStatementContext;
    upsertStatement (): UpsertStatementContext;
    mergeStatement (): MergeStatementContext;
    runAsStatement (): RunAsStatementContext;
    expressionStatement (): ExpressionStatementContext;
    propertyBlock (): PropertyBlockContext;
    getter (): GetterContext;
    setter (): SetterContext;
    catchClause (): CatchClauseContext;
    finallyBlock (): FinallyBlockContext;
    forControl (): ForControlContext;
    forInit (): ForInitContext;
    enhancedForControl (): EnhancedForControlContext;
    forUpdate (): ForUpdateContext;
    parExpression (): ParExpressionContext;
    expressionList (): ExpressionListContext;
    expression (): ExpressionContext;
    expression (_p: number): ExpressionContext;
    primary (): PrimaryContext;
    methodCall (): MethodCallContext;
    dotMethodCall (): DotMethodCallContext;
    creator (): CreatorContext;
    createdName (): CreatedNameContext;
    idCreatedNamePair (): IdCreatedNamePairContext;
    noRest (): NoRestContext;
    classCreatorRest (): ClassCreatorRestContext;
    arrayCreatorRest (): ArrayCreatorRestContext;
    mapCreatorRest (): MapCreatorRestContext;
    mapCreatorRestPair (): MapCreatorRestPairContext;
    setCreatorRest (): SetCreatorRestContext;
    arguments (): ArgumentsContext;
    soqlLiteral (): SoqlLiteralContext;
    query (): QueryContext;
    subQuery (): SubQueryContext;
    selectList (): SelectListContext;
    selectEntry (): SelectEntryContext;
    fieldName (): FieldNameContext;
    fromNameList (): FromNameListContext;
    subFieldList (): SubFieldListContext;
    subFieldEntry (): SubFieldEntryContext;
    soqlFunction (): SoqlFunctionContext;
    typeOf (): TypeOfContext;
    whenClause (): WhenClauseContext;
    elseClause (): ElseClauseContext;
    fieldNameList (): FieldNameListContext;
    usingScope (): UsingScopeContext;
    whereClause (): WhereClauseContext;
    logicalExpression (): LogicalExpressionContext;
    conditionalExpression (): ConditionalExpressionContext;
    fieldExpression (): FieldExpressionContext;
    comparisonOperator (): ComparisonOperatorContext;
    value (): ValueContext;
    valueList (): ValueListContext;
    currencyValue (): CurrencyValueContext;
    withClause (): WithClauseContext;
    filteringExpression (): FilteringExpressionContext;
    dataCategorySelection (): DataCategorySelectionContext;
    dataCategoryName (): DataCategoryNameContext;
    filteringSelector (): FilteringSelectorContext;
    groupByClause (): GroupByClauseContext;
    orderByClause (): OrderByClauseContext;
    fieldOrderList (): FieldOrderListContext;
    fieldOrder (): FieldOrderContext;
    limitClause (): LimitClauseContext;
    offsetClause (): OffsetClauseContext;
    allRowsClause (): AllRowsClauseContext;
    forClauses (): ForClausesContext;
    boundExpression (): BoundExpressionContext;
    dateFormula (): DateFormulaContext;
    signedInteger (): SignedIntegerContext;
    soqlId (): SoqlIdContext;
    id (): IdContext;
    anyId (): AnyIdContext;
    sempred (_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private readonly expression_sempred
    private static readonly _serializedATNSegments
    private static readonly _serializedATNSegment0
    private static readonly _serializedATNSegment1
    private static readonly _serializedATNSegment2
    static readonly _serializedATN: string
    static __ATN: ATN
    static get _ATN (): ATN;
  }

  export class TriggerUnitContext extends ParserRuleContext {
    TRIGGER (): TerminalNode;
    id (): IdContext[];
    id (i: number): IdContext;
    ON (): TerminalNode;
    LPAREN (): TerminalNode;
    triggerCase (): TriggerCaseContext[];
    triggerCase (i: number): TriggerCaseContext;
    RPAREN (): TerminalNode;
    block (): BlockContext;
    EOF (): TerminalNode;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TriggerCaseContext extends ParserRuleContext {
    BEFORE (): TerminalNode | undefined;
    AFTER (): TerminalNode | undefined;
    INSERT (): TerminalNode | undefined;
    UPDATE (): TerminalNode | undefined;
    DELETE (): TerminalNode | undefined;
    UNDELETE (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CompilationUnitContext extends ParserRuleContext {
    typeDeclaration (): TypeDeclarationContext;
    EOF (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeDeclarationContext extends ParserRuleContext {
    classDeclaration (): ClassDeclarationContext | undefined;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    enumDeclaration (): EnumDeclarationContext | undefined;
    interfaceDeclaration (): InterfaceDeclarationContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ClassDeclarationContext extends ParserRuleContext {
    CLASS (): TerminalNode;
    id (): IdContext;
    classBody (): ClassBodyContext;
    EXTENDS (): TerminalNode | undefined;
    typeRef (): TypeRefContext | undefined;
    IMPLEMENTS (): TerminalNode | undefined;
    typeList (): TypeListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class EnumDeclarationContext extends ParserRuleContext {
    ENUM (): TerminalNode;
    id (): IdContext;
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    enumConstants (): EnumConstantsContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class EnumConstantsContext extends ParserRuleContext {
    id (): IdContext[];
    id (i: number): IdContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class InterfaceDeclarationContext extends ParserRuleContext {
    INTERFACE (): TerminalNode;
    id (): IdContext;
    interfaceBody (): InterfaceBodyContext;
    EXTENDS (): TerminalNode | undefined;
    typeList (): TypeListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeListContext extends ParserRuleContext {
    typeRef (): TypeRefContext[];
    typeRef (i: number): TypeRefContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ClassBodyContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    classBodyDeclaration (): ClassBodyDeclarationContext[];
    classBodyDeclaration (i: number): ClassBodyDeclarationContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class InterfaceBodyContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    interfaceMethodDeclaration (): InterfaceMethodDeclarationContext[];
    interfaceMethodDeclaration (i: number): InterfaceMethodDeclarationContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ClassBodyDeclarationContext extends ParserRuleContext {
    SEMI (): TerminalNode | undefined;
    block (): BlockContext | undefined;
    STATIC (): TerminalNode | undefined;
    memberDeclaration (): MemberDeclarationContext | undefined;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ModifierContext extends ParserRuleContext {
    annotation (): AnnotationContext | undefined;
    GLOBAL (): TerminalNode | undefined;
    PUBLIC (): TerminalNode | undefined;
    PROTECTED (): TerminalNode | undefined;
    PRIVATE (): TerminalNode | undefined;
    TRANSIENT (): TerminalNode | undefined;
    STATIC (): TerminalNode | undefined;
    ABSTRACT (): TerminalNode | undefined;
    FINAL (): TerminalNode | undefined;
    WEBSERVICE (): TerminalNode | undefined;
    OVERRIDE (): TerminalNode | undefined;
    VIRTUAL (): TerminalNode | undefined;
    TESTMETHOD (): TerminalNode | undefined;
    WITH (): TerminalNode | undefined;
    SHARING (): TerminalNode | undefined;
    WITHOUT (): TerminalNode | undefined;
    INHERITED (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MemberDeclarationContext extends ParserRuleContext {
    methodDeclaration (): MethodDeclarationContext | undefined;
    fieldDeclaration (): FieldDeclarationContext | undefined;
    constructorDeclaration (): ConstructorDeclarationContext | undefined;
    interfaceDeclaration (): InterfaceDeclarationContext | undefined;
    classDeclaration (): ClassDeclarationContext | undefined;
    enumDeclaration (): EnumDeclarationContext | undefined;
    propertyDeclaration (): PropertyDeclarationContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MethodDeclarationContext extends ParserRuleContext {
    id (): IdContext;
    formalParameters (): FormalParametersContext;
    typeRef (): TypeRefContext | undefined;
    VOID (): TerminalNode | undefined;
    block (): BlockContext | undefined;
    SEMI (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ConstructorDeclarationContext extends ParserRuleContext {
    qualifiedName (): QualifiedNameContext;
    formalParameters (): FormalParametersContext;
    block (): BlockContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldDeclarationContext extends ParserRuleContext {
    typeRef (): TypeRefContext;
    variableDeclarators (): VariableDeclaratorsContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class PropertyDeclarationContext extends ParserRuleContext {
    typeRef (): TypeRefContext;
    id (): IdContext;
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    propertyBlock (): PropertyBlockContext[];
    propertyBlock (i: number): PropertyBlockContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class InterfaceMethodDeclarationContext extends ParserRuleContext {
    id (): IdContext;
    formalParameters (): FormalParametersContext;
    SEMI (): TerminalNode;
    typeRef (): TypeRefContext | undefined;
    VOID (): TerminalNode | undefined;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class VariableDeclaratorsContext extends ParserRuleContext {
    variableDeclarator (): VariableDeclaratorContext[];
    variableDeclarator (i: number): VariableDeclaratorContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class VariableDeclaratorContext extends ParserRuleContext {
    id (): IdContext;
    ASSIGN (): TerminalNode | undefined;
    expression (): ExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ArrayInitializerContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeRefContext extends ParserRuleContext {
    typeName (): TypeNameContext[];
    typeName (i: number): TypeNameContext;
    arraySubscripts (): ArraySubscriptsContext;
    DOT (): TerminalNode[];
    DOT (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ArraySubscriptsContext extends ParserRuleContext {
    LBRACK (): TerminalNode[];
    LBRACK (i: number): TerminalNode;
    RBRACK (): TerminalNode[];
    RBRACK (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeNameContext extends ParserRuleContext {
    LIST (): TerminalNode | undefined;
    typeArguments (): TypeArgumentsContext | undefined;
    SET (): TerminalNode | undefined;
    MAP (): TerminalNode | undefined;
    id (): IdContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeArgumentsContext extends ParserRuleContext {
    LT (): TerminalNode;
    typeList (): TypeListContext;
    GT (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FormalParametersContext extends ParserRuleContext {
    LPAREN (): TerminalNode;
    RPAREN (): TerminalNode;
    formalParameterList (): FormalParameterListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FormalParameterListContext extends ParserRuleContext {
    formalParameter (): FormalParameterContext[];
    formalParameter (i: number): FormalParameterContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FormalParameterContext extends ParserRuleContext {
    typeRef (): TypeRefContext;
    id (): IdContext;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class QualifiedNameContext extends ParserRuleContext {
    id (): IdContext[];
    id (i: number): IdContext;
    DOT (): TerminalNode[];
    DOT (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LiteralContext extends ParserRuleContext {
    IntegerLiteral (): TerminalNode | undefined;
    LongLiteral (): TerminalNode | undefined;
    NumberLiteral (): TerminalNode | undefined;
    StringLiteral (): TerminalNode | undefined;
    BooleanLiteral (): TerminalNode | undefined;
    NULL (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class AnnotationContext extends ParserRuleContext {
    ATSIGN (): TerminalNode;
    qualifiedName (): QualifiedNameContext;
    LPAREN (): TerminalNode | undefined;
    RPAREN (): TerminalNode | undefined;
    elementValuePairs (): ElementValuePairsContext | undefined;
    elementValue (): ElementValueContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ElementValuePairsContext extends ParserRuleContext {
    elementValuePair (): ElementValuePairContext[];
    elementValuePair (i: number): ElementValuePairContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ElementValuePairContext extends ParserRuleContext {
    id (): IdContext;
    ASSIGN (): TerminalNode;
    elementValue (): ElementValueContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ElementValueContext extends ParserRuleContext {
    expression (): ExpressionContext | undefined;
    annotation (): AnnotationContext | undefined;
    elementValueArrayInitializer (): ElementValueArrayInitializerContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ElementValueArrayInitializerContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    elementValue (): ElementValueContext[];
    elementValue (i: number): ElementValueContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BlockContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    statement (): StatementContext[];
    statement (i: number): StatementContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
    localVariableDeclaration (): LocalVariableDeclarationContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LocalVariableDeclarationContext extends ParserRuleContext {
    typeRef (): TypeRefContext;
    variableDeclarators (): VariableDeclaratorsContext;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class StatementContext extends ParserRuleContext {
    block (): BlockContext | undefined;
    ifStatement (): IfStatementContext | undefined;
    switchStatement (): SwitchStatementContext | undefined;
    forStatement (): ForStatementContext | undefined;
    whileStatement (): WhileStatementContext | undefined;
    doWhileStatement (): DoWhileStatementContext | undefined;
    tryStatement (): TryStatementContext | undefined;
    returnStatement (): ReturnStatementContext | undefined;
    throwStatement (): ThrowStatementContext | undefined;
    breakStatement (): BreakStatementContext | undefined;
    continueStatement (): ContinueStatementContext | undefined;
    insertStatement (): InsertStatementContext | undefined;
    updateStatement (): UpdateStatementContext | undefined;
    deleteStatement (): DeleteStatementContext | undefined;
    undeleteStatement (): UndeleteStatementContext | undefined;
    upsertStatement (): UpsertStatementContext | undefined;
    mergeStatement (): MergeStatementContext | undefined;
    runAsStatement (): RunAsStatementContext | undefined;
    localVariableDeclarationStatement (): LocalVariableDeclarationStatementContext | undefined;
    expressionStatement (): ExpressionStatementContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class IfStatementContext extends ParserRuleContext {
    IF (): TerminalNode;
    parExpression (): ParExpressionContext;
    statement (): StatementContext[];
    statement (i: number): StatementContext;
    ELSE (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SwitchStatementContext extends ParserRuleContext {
    SWITCH (): TerminalNode;
    ON (): TerminalNode;
    expression (): ExpressionContext;
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    whenControl (): WhenControlContext[];
    whenControl (i: number): WhenControlContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhenControlContext extends ParserRuleContext {
    WHEN (): TerminalNode;
    whenValue (): WhenValueContext;
    block (): BlockContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhenValueContext extends ParserRuleContext {
    ELSE (): TerminalNode | undefined;
    whenLiteral (): WhenLiteralContext[];
    whenLiteral (i: number): WhenLiteralContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    id (): IdContext[];
    id (i: number): IdContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhenLiteralContext extends ParserRuleContext {
    IntegerLiteral (): TerminalNode | undefined;
    SUB (): TerminalNode | undefined;
    LongLiteral (): TerminalNode | undefined;
    StringLiteral (): TerminalNode | undefined;
    NULL (): TerminalNode | undefined;
    id (): IdContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ForStatementContext extends ParserRuleContext {
    FOR (): TerminalNode;
    LPAREN (): TerminalNode;
    forControl (): ForControlContext;
    RPAREN (): TerminalNode;
    statement (): StatementContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhileStatementContext extends ParserRuleContext {
    WHILE (): TerminalNode;
    parExpression (): ParExpressionContext;
    statement (): StatementContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DoWhileStatementContext extends ParserRuleContext {
    DO (): TerminalNode;
    statement (): StatementContext;
    WHILE (): TerminalNode;
    parExpression (): ParExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TryStatementContext extends ParserRuleContext {
    TRY (): TerminalNode;
    block (): BlockContext;
    finallyBlock (): FinallyBlockContext | undefined;
    catchClause (): CatchClauseContext[];
    catchClause (i: number): CatchClauseContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ReturnStatementContext extends ParserRuleContext {
    RETURN (): TerminalNode;
    SEMI (): TerminalNode;
    expression (): ExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ThrowStatementContext extends ParserRuleContext {
    THROW (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BreakStatementContext extends ParserRuleContext {
    BREAK (): TerminalNode;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ContinueStatementContext extends ParserRuleContext {
    CONTINUE (): TerminalNode;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class InsertStatementContext extends ParserRuleContext {
    INSERT (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class UpdateStatementContext extends ParserRuleContext {
    UPDATE (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DeleteStatementContext extends ParserRuleContext {
    DELETE (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class UndeleteStatementContext extends ParserRuleContext {
    UNDELETE (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class UpsertStatementContext extends ParserRuleContext {
    UPSERT (): TerminalNode;
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    qualifiedName (): QualifiedNameContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MergeStatementContext extends ParserRuleContext {
    MERGE (): TerminalNode;
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class RunAsStatementContext extends ParserRuleContext {
    SYSTEMRUNAS (): TerminalNode;
    LPAREN (): TerminalNode;
    RPAREN (): TerminalNode;
    block (): BlockContext;
    expressionList (): ExpressionListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ExpressionStatementContext extends ParserRuleContext {
    expression (): ExpressionContext;
    SEMI (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class PropertyBlockContext extends ParserRuleContext {
    getter (): GetterContext | undefined;
    setter (): SetterContext | undefined;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class GetterContext extends ParserRuleContext {
    GET (): TerminalNode;
    SEMI (): TerminalNode | undefined;
    block (): BlockContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SetterContext extends ParserRuleContext {
    SET (): TerminalNode;
    SEMI (): TerminalNode | undefined;
    block (): BlockContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CatchClauseContext extends ParserRuleContext {
    CATCH (): TerminalNode;
    LPAREN (): TerminalNode;
    qualifiedName (): QualifiedNameContext;
    id (): IdContext;
    RPAREN (): TerminalNode;
    block (): BlockContext;
    modifier (): ModifierContext[];
    modifier (i: number): ModifierContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FinallyBlockContext extends ParserRuleContext {
    FINALLY (): TerminalNode;
    block (): BlockContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ForControlContext extends ParserRuleContext {
    enhancedForControl (): EnhancedForControlContext | undefined;
    SEMI (): TerminalNode[];
    SEMI (i: number): TerminalNode;
    forInit (): ForInitContext | undefined;
    expression (): ExpressionContext | undefined;
    forUpdate (): ForUpdateContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ForInitContext extends ParserRuleContext {
    localVariableDeclaration (): LocalVariableDeclarationContext | undefined;
    expressionList (): ExpressionListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class EnhancedForControlContext extends ParserRuleContext {
    typeRef (): TypeRefContext;
    id (): IdContext;
    COLON (): TerminalNode;
    expression (): ExpressionContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ForUpdateContext extends ParserRuleContext {
    expressionList (): ExpressionListContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ParExpressionContext extends ParserRuleContext {
    LPAREN (): TerminalNode;
    expression (): ExpressionContext;
    RPAREN (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ExpressionListContext extends ParserRuleContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ExpressionContext extends ParserRuleContext {
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    copyFrom (ctx: ExpressionContext): void;
  }

  export class PrimaryExpressionContext extends ExpressionContext {
    primary (): PrimaryContext;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DotExpressionContext extends ExpressionContext {
    expression (): ExpressionContext;
    DOT (): TerminalNode | undefined;
    QUESTIONDOT (): TerminalNode | undefined;
    dotMethodCall (): DotMethodCallContext | undefined;
    anyId (): AnyIdContext | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ArrayExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    LBRACK (): TerminalNode;
    RBRACK (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MethodCallExpressionContext extends ExpressionContext {
    methodCall (): MethodCallContext;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class NewExpressionContext extends ExpressionContext {
    NEW (): TerminalNode;
    creator (): CreatorContext;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CastExpressionContext extends ExpressionContext {
    LPAREN (): TerminalNode;
    typeRef (): TypeRefContext;
    RPAREN (): TerminalNode;
    expression (): ExpressionContext;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class PostOpExpressionContext extends ExpressionContext {
    expression (): ExpressionContext;
    INC (): TerminalNode | undefined;
    DEC (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class PreOpExpressionContext extends ExpressionContext {
    expression (): ExpressionContext;
    ADD (): TerminalNode | undefined;
    SUB (): TerminalNode | undefined;
    INC (): TerminalNode | undefined;
    DEC (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class NegExpressionContext extends ExpressionContext {
    expression (): ExpressionContext;
    TILDE (): TerminalNode | undefined;
    BANG (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class Arth1ExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    MUL (): TerminalNode | undefined;
    DIV (): TerminalNode | undefined;
    MOD (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class Arth2ExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    ADD (): TerminalNode | undefined;
    SUB (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BitExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    LT (): TerminalNode[];
    LT (i: number): TerminalNode;
    GT (): TerminalNode[];
    GT (i: number): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CmpExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    GT (): TerminalNode | undefined;
    LT (): TerminalNode | undefined;
    ASSIGN (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class InstanceOfExpressionContext extends ExpressionContext {
    expression (): ExpressionContext;
    INSTANCEOF (): TerminalNode;
    typeRef (): TypeRefContext;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class EqualityExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    TRIPLEEQUAL (): TerminalNode | undefined;
    TRIPLENOTEQUAL (): TerminalNode | undefined;
    EQUAL (): TerminalNode | undefined;
    NOTEQUAL (): TerminalNode | undefined;
    LESSANDGREATER (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BitAndExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    BITAND (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BitNotExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    CARET (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BitOrExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    BITOR (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LogAndExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    AND (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LogOrExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    OR (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CondExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    QUESTION (): TerminalNode;
    COLON (): TerminalNode;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class AssignExpressionContext extends ExpressionContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    ASSIGN (): TerminalNode | undefined;
    ADD_ASSIGN (): TerminalNode | undefined;
    SUB_ASSIGN (): TerminalNode | undefined;
    MUL_ASSIGN (): TerminalNode | undefined;
    DIV_ASSIGN (): TerminalNode | undefined;
    AND_ASSIGN (): TerminalNode | undefined;
    OR_ASSIGN (): TerminalNode | undefined;
    XOR_ASSIGN (): TerminalNode | undefined;
    RSHIFT_ASSIGN (): TerminalNode | undefined;
    URSHIFT_ASSIGN (): TerminalNode | undefined;
    LSHIFT_ASSIGN (): TerminalNode | undefined;
    MOD_ASSIGN (): TerminalNode | undefined;
    constructor (ctx: ExpressionContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class PrimaryContext extends ParserRuleContext {
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    copyFrom (ctx: PrimaryContext): void;
  }

  export class SubPrimaryContext extends PrimaryContext {
    LPAREN (): TerminalNode;
    expression (): ExpressionContext;
    RPAREN (): TerminalNode;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ThisPrimaryContext extends PrimaryContext {
    THIS (): TerminalNode;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SuperPrimaryContext extends PrimaryContext {
    SUPER (): TerminalNode;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LiteralPrimaryContext extends PrimaryContext {
    literal (): LiteralContext;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeRefPrimaryContext extends PrimaryContext {
    typeRef (): TypeRefContext;
    DOT (): TerminalNode;
    CLASS (): TerminalNode;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class IdPrimaryContext extends PrimaryContext {
    id (): IdContext;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SoqlPrimaryContext extends PrimaryContext {
    soqlLiteral (): SoqlLiteralContext;
    constructor (ctx: PrimaryContext);
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MethodCallContext extends ParserRuleContext {
    id (): IdContext | undefined;
    LPAREN (): TerminalNode;
    RPAREN (): TerminalNode;
    expressionList (): ExpressionListContext | undefined;
    THIS (): TerminalNode | undefined;
    SUPER (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DotMethodCallContext extends ParserRuleContext {
    anyId (): AnyIdContext;
    LPAREN (): TerminalNode;
    RPAREN (): TerminalNode;
    expressionList (): ExpressionListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CreatorContext extends ParserRuleContext {
    createdName (): CreatedNameContext;
    noRest (): NoRestContext | undefined;
    classCreatorRest (): ClassCreatorRestContext | undefined;
    arrayCreatorRest (): ArrayCreatorRestContext | undefined;
    mapCreatorRest (): MapCreatorRestContext | undefined;
    setCreatorRest (): SetCreatorRestContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CreatedNameContext extends ParserRuleContext {
    idCreatedNamePair (): IdCreatedNamePairContext[];
    idCreatedNamePair (i: number): IdCreatedNamePairContext;
    DOT (): TerminalNode[];
    DOT (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class IdCreatedNamePairContext extends ParserRuleContext {
    anyId (): AnyIdContext;
    LT (): TerminalNode | undefined;
    typeList (): TypeListContext | undefined;
    GT (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class NoRestContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    RBRACE (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ClassCreatorRestContext extends ParserRuleContext {
    arguments (): ArgumentsContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ArrayCreatorRestContext extends ParserRuleContext {
    LBRACK (): TerminalNode;
    expression (): ExpressionContext | undefined;
    RBRACK (): TerminalNode;
    arrayInitializer (): ArrayInitializerContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MapCreatorRestContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    mapCreatorRestPair (): MapCreatorRestPairContext[];
    mapCreatorRestPair (i: number): MapCreatorRestPairContext;
    RBRACE (): TerminalNode;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class MapCreatorRestPairContext extends ParserRuleContext {
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    MAPTO (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SetCreatorRestContext extends ParserRuleContext {
    LBRACE (): TerminalNode;
    expression (): ExpressionContext[];
    expression (i: number): ExpressionContext;
    RBRACE (): TerminalNode;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ArgumentsContext extends ParserRuleContext {
    LPAREN (): TerminalNode;
    RPAREN (): TerminalNode;
    expressionList (): ExpressionListContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SoqlLiteralContext extends ParserRuleContext {
    LBRACK (): TerminalNode;
    query (): QueryContext;
    RBRACK (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class QueryContext extends ParserRuleContext {
    SELECT (): TerminalNode;
    selectList (): SelectListContext;
    FROM (): TerminalNode;
    fromNameList (): FromNameListContext;
    forClauses (): ForClausesContext;
    usingScope (): UsingScopeContext | undefined;
    whereClause (): WhereClauseContext | undefined;
    withClause (): WithClauseContext | undefined;
    groupByClause (): GroupByClauseContext | undefined;
    orderByClause (): OrderByClauseContext | undefined;
    limitClause (): LimitClauseContext | undefined;
    offsetClause (): OffsetClauseContext | undefined;
    allRowsClause (): AllRowsClauseContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SubQueryContext extends ParserRuleContext {
    SELECT (): TerminalNode;
    subFieldList (): SubFieldListContext;
    FROM (): TerminalNode;
    fromNameList (): FromNameListContext;
    whereClause (): WhereClauseContext | undefined;
    orderByClause (): OrderByClauseContext | undefined;
    limitClause (): LimitClauseContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SelectListContext extends ParserRuleContext {
    selectEntry (): SelectEntryContext[];
    selectEntry (i: number): SelectEntryContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SelectEntryContext extends ParserRuleContext {
    fieldName (): FieldNameContext | undefined;
    soqlId (): SoqlIdContext | undefined;
    soqlFunction (): SoqlFunctionContext | undefined;
    LPAREN (): TerminalNode | undefined;
    subQuery (): SubQueryContext | undefined;
    RPAREN (): TerminalNode | undefined;
    typeOf (): TypeOfContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldNameContext extends ParserRuleContext {
    soqlId (): SoqlIdContext[];
    soqlId (i: number): SoqlIdContext;
    DOT (): TerminalNode[];
    DOT (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FromNameListContext extends ParserRuleContext {
    fieldName (): FieldNameContext[];
    fieldName (i: number): FieldNameContext;
    soqlId (): SoqlIdContext[];
    soqlId (i: number): SoqlIdContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SubFieldListContext extends ParserRuleContext {
    subFieldEntry (): SubFieldEntryContext[];
    subFieldEntry (i: number): SubFieldEntryContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SubFieldEntryContext extends ParserRuleContext {
    fieldName (): FieldNameContext | undefined;
    soqlId (): SoqlIdContext | undefined;
    soqlFunction (): SoqlFunctionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SoqlFunctionContext extends ParserRuleContext {
    AVG (): TerminalNode | undefined;
    LPAREN (): TerminalNode;
    fieldName (): FieldNameContext | undefined;
    RPAREN (): TerminalNode;
    COUNT (): TerminalNode | undefined;
    COUNT_DISTINCT (): TerminalNode | undefined;
    MIN (): TerminalNode | undefined;
    MAX (): TerminalNode | undefined;
    SUM (): TerminalNode | undefined;
    TOLABEL (): TerminalNode | undefined;
    FORMAT (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class TypeOfContext extends ParserRuleContext {
    TYPEOF (): TerminalNode;
    fieldName (): FieldNameContext;
    END (): TerminalNode;
    whenClause (): WhenClauseContext[];
    whenClause (i: number): WhenClauseContext;
    elseClause (): ElseClauseContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhenClauseContext extends ParserRuleContext {
    WHEN (): TerminalNode;
    fieldName (): FieldNameContext;
    THEN (): TerminalNode;
    fieldNameList (): FieldNameListContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ElseClauseContext extends ParserRuleContext {
    ELSE (): TerminalNode;
    fieldNameList (): FieldNameListContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldNameListContext extends ParserRuleContext {
    fieldName (): FieldNameContext[];
    fieldName (i: number): FieldNameContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class UsingScopeContext extends ParserRuleContext {
    USING (): TerminalNode;
    SCOPE (): TerminalNode;
    soqlId (): SoqlIdContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WhereClauseContext extends ParserRuleContext {
    WHERE (): TerminalNode;
    logicalExpression (): LogicalExpressionContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LogicalExpressionContext extends ParserRuleContext {
    conditionalExpression (): ConditionalExpressionContext[];
    conditionalExpression (i: number): ConditionalExpressionContext;
    SOQLAND (): TerminalNode[];
    SOQLAND (i: number): TerminalNode;
    SOQLOR (): TerminalNode[];
    SOQLOR (i: number): TerminalNode;
    NOT (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ConditionalExpressionContext extends ParserRuleContext {
    LPAREN (): TerminalNode | undefined;
    logicalExpression (): LogicalExpressionContext | undefined;
    RPAREN (): TerminalNode | undefined;
    fieldExpression (): FieldExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldExpressionContext extends ParserRuleContext {
    fieldName (): FieldNameContext | undefined;
    comparisonOperator (): ComparisonOperatorContext;
    value (): ValueContext;
    soqlFunction (): SoqlFunctionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ComparisonOperatorContext extends ParserRuleContext {
    ASSIGN (): TerminalNode | undefined;
    NOTEQUAL (): TerminalNode | undefined;
    LT (): TerminalNode | undefined;
    GT (): TerminalNode | undefined;
    LESSANDGREATER (): TerminalNode | undefined;
    LIKE (): TerminalNode | undefined;
    IN (): TerminalNode | undefined;
    NOT (): TerminalNode | undefined;
    INCLUDES (): TerminalNode | undefined;
    EXCLUDES (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ValueContext extends ParserRuleContext {
    NULL (): TerminalNode | undefined;
    BooleanLiteral (): TerminalNode | undefined;
    IntegerLiteral (): TerminalNode | undefined;
    LongLiteral (): TerminalNode | undefined;
    NumberLiteral (): TerminalNode | undefined;
    StringLiteral (): TerminalNode | undefined;
    DateLiteral (): TerminalNode | undefined;
    DateTimeLiteral (): TerminalNode | undefined;
    dateFormula (): DateFormulaContext | undefined;
    currencyValue (): CurrencyValueContext | undefined;
    LPAREN (): TerminalNode | undefined;
    subQuery (): SubQueryContext | undefined;
    RPAREN (): TerminalNode | undefined;
    valueList (): ValueListContext | undefined;
    boundExpression (): BoundExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ValueListContext extends ParserRuleContext {
    LPAREN (): TerminalNode;
    value (): ValueContext[];
    value (i: number): ValueContext;
    RPAREN (): TerminalNode;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class CurrencyValueContext extends ParserRuleContext {
    soqlId (): SoqlIdContext;
    signedInteger (): SignedIntegerContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class WithClauseContext extends ParserRuleContext {
    WITH (): TerminalNode;
    DATA (): TerminalNode | undefined;
    CATEGORY (): TerminalNode | undefined;
    filteringExpression (): FilteringExpressionContext | undefined;
    SECURITY_ENFORCED (): TerminalNode | undefined;
    logicalExpression (): LogicalExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FilteringExpressionContext extends ParserRuleContext {
    dataCategorySelection (): DataCategorySelectionContext[];
    dataCategorySelection (i: number): DataCategorySelectionContext;
    AND (): TerminalNode[];
    AND (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DataCategorySelectionContext extends ParserRuleContext {
    soqlId (): SoqlIdContext;
    filteringSelector (): FilteringSelectorContext;
    dataCategoryName (): DataCategoryNameContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DataCategoryNameContext extends ParserRuleContext {
    soqlId (): SoqlIdContext[];
    soqlId (i: number): SoqlIdContext;
    LPAREN (): TerminalNode[];
    LPAREN (i: number): TerminalNode;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FilteringSelectorContext extends ParserRuleContext {
    AT (): TerminalNode | undefined;
    ABOVE (): TerminalNode | undefined;
    BELOW (): TerminalNode | undefined;
    ABOVE_OR_BELOW (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class GroupByClauseContext extends ParserRuleContext {
    GROUP (): TerminalNode;
    BY (): TerminalNode;
    selectList (): SelectListContext | undefined;
    HAVING (): TerminalNode | undefined;
    logicalExpression (): LogicalExpressionContext | undefined;
    ROLLUP (): TerminalNode | undefined;
    LPAREN (): TerminalNode | undefined;
    fieldName (): FieldNameContext[];
    fieldName (i: number): FieldNameContext;
    RPAREN (): TerminalNode | undefined;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    CUBE (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class OrderByClauseContext extends ParserRuleContext {
    ORDER (): TerminalNode;
    BY (): TerminalNode;
    fieldOrderList (): FieldOrderListContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldOrderListContext extends ParserRuleContext {
    fieldOrder (): FieldOrderContext[];
    fieldOrder (i: number): FieldOrderContext;
    COMMA (): TerminalNode[];
    COMMA (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class FieldOrderContext extends ParserRuleContext {
    fieldName (): FieldNameContext | undefined;
    NULLS (): TerminalNode | undefined;
    ASC (): TerminalNode | undefined;
    DESC (): TerminalNode | undefined;
    FIRST (): TerminalNode | undefined;
    LAST (): TerminalNode | undefined;
    soqlFunction (): SoqlFunctionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class LimitClauseContext extends ParserRuleContext {
    LIMIT (): TerminalNode;
    IntegerLiteral (): TerminalNode | undefined;
    boundExpression (): BoundExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class OffsetClauseContext extends ParserRuleContext {
    OFFSET (): TerminalNode;
    IntegerLiteral (): TerminalNode | undefined;
    boundExpression (): BoundExpressionContext | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class AllRowsClauseContext extends ParserRuleContext {
    ALL (): TerminalNode;
    ROWS (): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class ForClausesContext extends ParserRuleContext {
    FOR (): TerminalNode[];
    FOR (i: number): TerminalNode;
    VIEW (): TerminalNode[];
    VIEW (i: number): TerminalNode;
    UPDATE (): TerminalNode[];
    UPDATE (i: number): TerminalNode;
    REFERENCE (): TerminalNode[];
    REFERENCE (i: number): TerminalNode;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class BoundExpressionContext extends ParserRuleContext {
    COLON (): TerminalNode;
    expression (): ExpressionContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class DateFormulaContext extends ParserRuleContext {
    YESTERDAY (): TerminalNode | undefined;
    TODAY (): TerminalNode | undefined;
    TOMORROW (): TerminalNode | undefined;
    LAST_WEEK (): TerminalNode | undefined;
    THIS_WEEK (): TerminalNode | undefined;
    NEXT_WEEK (): TerminalNode | undefined;
    LAST_MONTH (): TerminalNode | undefined;
    THIS_MONTH (): TerminalNode | undefined;
    NEXT_MONTH (): TerminalNode | undefined;
    LAST_90_DAYS (): TerminalNode | undefined;
    NEXT_90_DAYS (): TerminalNode | undefined;
    LAST_N_DAYS_N (): TerminalNode | undefined;
    COLON (): TerminalNode | undefined;
    signedInteger (): SignedIntegerContext | undefined;
    NEXT_N_DAYS_N (): TerminalNode | undefined;
    NEXT_N_WEEKS_N (): TerminalNode | undefined;
    LAST_N_WEEKS_N (): TerminalNode | undefined;
    NEXT_N_MONTHS_N (): TerminalNode | undefined;
    LAST_N_MONTHS_N (): TerminalNode | undefined;
    THIS_QUARTER (): TerminalNode | undefined;
    LAST_QUARTER (): TerminalNode | undefined;
    NEXT_QUARTER (): TerminalNode | undefined;
    NEXT_N_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_QUARTERS_N (): TerminalNode | undefined;
    THIS_YEAR (): TerminalNode | undefined;
    LAST_YEAR (): TerminalNode | undefined;
    NEXT_YEAR (): TerminalNode | undefined;
    NEXT_N_YEARS_N (): TerminalNode | undefined;
    LAST_N_YEARS_N (): TerminalNode | undefined;
    THIS_FISCAL_QUARTER (): TerminalNode | undefined;
    LAST_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    THIS_FISCAL_YEAR (): TerminalNode | undefined;
    LAST_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SignedIntegerContext extends ParserRuleContext {
    IntegerLiteral (): TerminalNode;
    ADD (): TerminalNode | undefined;
    SUB (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class SoqlIdContext extends ParserRuleContext {
    id (): IdContext;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class IdContext extends ParserRuleContext {
    Identifier (): TerminalNode | undefined;
    AFTER (): TerminalNode | undefined;
    BEFORE (): TerminalNode | undefined;
    GET (): TerminalNode | undefined;
    INHERITED (): TerminalNode | undefined;
    INSTANCEOF (): TerminalNode | undefined;
    SET (): TerminalNode | undefined;
    SHARING (): TerminalNode | undefined;
    SWITCH (): TerminalNode | undefined;
    TRANSIENT (): TerminalNode | undefined;
    TRIGGER (): TerminalNode | undefined;
    WHEN (): TerminalNode | undefined;
    WITH (): TerminalNode | undefined;
    WITHOUT (): TerminalNode | undefined;
    SELECT (): TerminalNode | undefined;
    COUNT (): TerminalNode | undefined;
    FROM (): TerminalNode | undefined;
    AS (): TerminalNode | undefined;
    USING (): TerminalNode | undefined;
    SCOPE (): TerminalNode | undefined;
    WHERE (): TerminalNode | undefined;
    ORDER (): TerminalNode | undefined;
    BY (): TerminalNode | undefined;
    LIMIT (): TerminalNode | undefined;
    SOQLAND (): TerminalNode | undefined;
    SOQLOR (): TerminalNode | undefined;
    NOT (): TerminalNode | undefined;
    AVG (): TerminalNode | undefined;
    COUNT_DISTINCT (): TerminalNode | undefined;
    MIN (): TerminalNode | undefined;
    MAX (): TerminalNode | undefined;
    SUM (): TerminalNode | undefined;
    TYPEOF (): TerminalNode | undefined;
    END (): TerminalNode | undefined;
    THEN (): TerminalNode | undefined;
    LIKE (): TerminalNode | undefined;
    IN (): TerminalNode | undefined;
    INCLUDES (): TerminalNode | undefined;
    EXCLUDES (): TerminalNode | undefined;
    ASC (): TerminalNode | undefined;
    DESC (): TerminalNode | undefined;
    NULLS (): TerminalNode | undefined;
    FIRST (): TerminalNode | undefined;
    LAST (): TerminalNode | undefined;
    GROUP (): TerminalNode | undefined;
    ALL (): TerminalNode | undefined;
    ROWS (): TerminalNode | undefined;
    VIEW (): TerminalNode | undefined;
    HAVING (): TerminalNode | undefined;
    ROLLUP (): TerminalNode | undefined;
    TOLABEL (): TerminalNode | undefined;
    OFFSET (): TerminalNode | undefined;
    DATA (): TerminalNode | undefined;
    CATEGORY (): TerminalNode | undefined;
    AT (): TerminalNode | undefined;
    ABOVE (): TerminalNode | undefined;
    BELOW (): TerminalNode | undefined;
    ABOVE_OR_BELOW (): TerminalNode | undefined;
    SECURITY_ENFORCED (): TerminalNode | undefined;
    REFERENCE (): TerminalNode | undefined;
    CUBE (): TerminalNode | undefined;
    FORMAT (): TerminalNode | undefined;
    YESTERDAY (): TerminalNode | undefined;
    TODAY (): TerminalNode | undefined;
    TOMORROW (): TerminalNode | undefined;
    LAST_WEEK (): TerminalNode | undefined;
    THIS_WEEK (): TerminalNode | undefined;
    NEXT_WEEK (): TerminalNode | undefined;
    LAST_MONTH (): TerminalNode | undefined;
    THIS_MONTH (): TerminalNode | undefined;
    NEXT_MONTH (): TerminalNode | undefined;
    LAST_90_DAYS (): TerminalNode | undefined;
    NEXT_90_DAYS (): TerminalNode | undefined;
    LAST_N_DAYS_N (): TerminalNode | undefined;
    NEXT_N_DAYS_N (): TerminalNode | undefined;
    NEXT_N_WEEKS_N (): TerminalNode | undefined;
    LAST_N_WEEKS_N (): TerminalNode | undefined;
    NEXT_N_MONTHS_N (): TerminalNode | undefined;
    LAST_N_MONTHS_N (): TerminalNode | undefined;
    THIS_QUARTER (): TerminalNode | undefined;
    LAST_QUARTER (): TerminalNode | undefined;
    NEXT_QUARTER (): TerminalNode | undefined;
    NEXT_N_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_QUARTERS_N (): TerminalNode | undefined;
    THIS_YEAR (): TerminalNode | undefined;
    LAST_YEAR (): TerminalNode | undefined;
    NEXT_YEAR (): TerminalNode | undefined;
    NEXT_N_YEARS_N (): TerminalNode | undefined;
    LAST_N_YEARS_N (): TerminalNode | undefined;
    THIS_FISCAL_QUARTER (): TerminalNode | undefined;
    LAST_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    THIS_FISCAL_YEAR (): TerminalNode | undefined;
    LAST_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }

  export class AnyIdContext extends ParserRuleContext {
    Identifier (): TerminalNode | undefined;
    ABSTRACT (): TerminalNode | undefined;
    AFTER (): TerminalNode | undefined;
    BEFORE (): TerminalNode | undefined;
    BREAK (): TerminalNode | undefined;
    CATCH (): TerminalNode | undefined;
    CLASS (): TerminalNode | undefined;
    CONTINUE (): TerminalNode | undefined;
    DELETE (): TerminalNode | undefined;
    DO (): TerminalNode | undefined;
    ELSE (): TerminalNode | undefined;
    ENUM (): TerminalNode | undefined;
    EXTENDS (): TerminalNode | undefined;
    FINAL (): TerminalNode | undefined;
    FINALLY (): TerminalNode | undefined;
    FOR (): TerminalNode | undefined;
    GET (): TerminalNode | undefined;
    GLOBAL (): TerminalNode | undefined;
    IF (): TerminalNode | undefined;
    IMPLEMENTS (): TerminalNode | undefined;
    INHERITED (): TerminalNode | undefined;
    INSERT (): TerminalNode | undefined;
    INSTANCEOF (): TerminalNode | undefined;
    INTERFACE (): TerminalNode | undefined;
    LIST (): TerminalNode | undefined;
    MAP (): TerminalNode | undefined;
    MERGE (): TerminalNode | undefined;
    NEW (): TerminalNode | undefined;
    NULL (): TerminalNode | undefined;
    ON (): TerminalNode | undefined;
    OVERRIDE (): TerminalNode | undefined;
    PRIVATE (): TerminalNode | undefined;
    PROTECTED (): TerminalNode | undefined;
    PUBLIC (): TerminalNode | undefined;
    RETURN (): TerminalNode | undefined;
    SET (): TerminalNode | undefined;
    SHARING (): TerminalNode | undefined;
    STATIC (): TerminalNode | undefined;
    SUPER (): TerminalNode | undefined;
    SWITCH (): TerminalNode | undefined;
    TESTMETHOD (): TerminalNode | undefined;
    THIS (): TerminalNode | undefined;
    THROW (): TerminalNode | undefined;
    TRANSIENT (): TerminalNode | undefined;
    TRIGGER (): TerminalNode | undefined;
    TRY (): TerminalNode | undefined;
    UNDELETE (): TerminalNode | undefined;
    UPDATE (): TerminalNode | undefined;
    UPSERT (): TerminalNode | undefined;
    VIRTUAL (): TerminalNode | undefined;
    WEBSERVICE (): TerminalNode | undefined;
    WHEN (): TerminalNode | undefined;
    WHILE (): TerminalNode | undefined;
    WITH (): TerminalNode | undefined;
    WITHOUT (): TerminalNode | undefined;
    SELECT (): TerminalNode | undefined;
    COUNT (): TerminalNode | undefined;
    FROM (): TerminalNode | undefined;
    AS (): TerminalNode | undefined;
    USING (): TerminalNode | undefined;
    SCOPE (): TerminalNode | undefined;
    WHERE (): TerminalNode | undefined;
    ORDER (): TerminalNode | undefined;
    BY (): TerminalNode | undefined;
    LIMIT (): TerminalNode | undefined;
    SOQLAND (): TerminalNode | undefined;
    SOQLOR (): TerminalNode | undefined;
    NOT (): TerminalNode | undefined;
    AVG (): TerminalNode | undefined;
    COUNT_DISTINCT (): TerminalNode | undefined;
    MIN (): TerminalNode | undefined;
    MAX (): TerminalNode | undefined;
    SUM (): TerminalNode | undefined;
    TYPEOF (): TerminalNode | undefined;
    END (): TerminalNode | undefined;
    THEN (): TerminalNode | undefined;
    LIKE (): TerminalNode | undefined;
    IN (): TerminalNode | undefined;
    INCLUDES (): TerminalNode | undefined;
    EXCLUDES (): TerminalNode | undefined;
    ASC (): TerminalNode | undefined;
    DESC (): TerminalNode | undefined;
    NULLS (): TerminalNode | undefined;
    FIRST (): TerminalNode | undefined;
    LAST (): TerminalNode | undefined;
    GROUP (): TerminalNode | undefined;
    ALL (): TerminalNode | undefined;
    ROWS (): TerminalNode | undefined;
    VIEW (): TerminalNode | undefined;
    HAVING (): TerminalNode | undefined;
    ROLLUP (): TerminalNode | undefined;
    TOLABEL (): TerminalNode | undefined;
    OFFSET (): TerminalNode | undefined;
    DATA (): TerminalNode | undefined;
    CATEGORY (): TerminalNode | undefined;
    AT (): TerminalNode | undefined;
    ABOVE (): TerminalNode | undefined;
    BELOW (): TerminalNode | undefined;
    ABOVE_OR_BELOW (): TerminalNode | undefined;
    SECURITY_ENFORCED (): TerminalNode | undefined;
    REFERENCE (): TerminalNode | undefined;
    CUBE (): TerminalNode | undefined;
    FORMAT (): TerminalNode | undefined;
    YESTERDAY (): TerminalNode | undefined;
    TODAY (): TerminalNode | undefined;
    TOMORROW (): TerminalNode | undefined;
    LAST_WEEK (): TerminalNode | undefined;
    THIS_WEEK (): TerminalNode | undefined;
    NEXT_WEEK (): TerminalNode | undefined;
    LAST_MONTH (): TerminalNode | undefined;
    THIS_MONTH (): TerminalNode | undefined;
    NEXT_MONTH (): TerminalNode | undefined;
    LAST_90_DAYS (): TerminalNode | undefined;
    NEXT_90_DAYS (): TerminalNode | undefined;
    LAST_N_DAYS_N (): TerminalNode | undefined;
    NEXT_N_DAYS_N (): TerminalNode | undefined;
    NEXT_N_WEEKS_N (): TerminalNode | undefined;
    LAST_N_WEEKS_N (): TerminalNode | undefined;
    NEXT_N_MONTHS_N (): TerminalNode | undefined;
    LAST_N_MONTHS_N (): TerminalNode | undefined;
    THIS_QUARTER (): TerminalNode | undefined;
    LAST_QUARTER (): TerminalNode | undefined;
    NEXT_QUARTER (): TerminalNode | undefined;
    NEXT_N_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_QUARTERS_N (): TerminalNode | undefined;
    THIS_YEAR (): TerminalNode | undefined;
    LAST_YEAR (): TerminalNode | undefined;
    NEXT_YEAR (): TerminalNode | undefined;
    NEXT_N_YEARS_N (): TerminalNode | undefined;
    LAST_N_YEARS_N (): TerminalNode | undefined;
    THIS_FISCAL_QUARTER (): TerminalNode | undefined;
    LAST_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_FISCAL_QUARTER (): TerminalNode | undefined;
    NEXT_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_QUARTERS_N (): TerminalNode | undefined;
    THIS_FISCAL_YEAR (): TerminalNode | undefined;
    LAST_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_FISCAL_YEAR (): TerminalNode | undefined;
    NEXT_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    LAST_N_FISCAL_YEARS_N (): TerminalNode | undefined;
    constructor (parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex (): number;
    enterRule (listener: ApexParserListener): void;
    exitRule (listener: ApexParserListener): void;
    accept<Result>(visitor: ApexParserVisitor<Result>): Result;
  }
}
