declare module 'apex-parser/lib/ApexParserVisitor' {
  import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
  import {
    SubPrimaryContext,
    ThisPrimaryContext,
    SuperPrimaryContext,
    LiteralPrimaryContext,
    TypeRefPrimaryContext,
    IdPrimaryContext,
    SoqlPrimaryContext,
    PrimaryExpressionContext,
    DotExpressionContext,
    ArrayExpressionContext,
    MethodCallExpressionContext,
    NewExpressionContext,
    CastExpressionContext,
    PostOpExpressionContext,
    PreOpExpressionContext,
    NegExpressionContext,
    Arth1ExpressionContext,
    Arth2ExpressionContext,
    BitExpressionContext,
    CmpExpressionContext,
    InstanceOfExpressionContext,
    EqualityExpressionContext,
    BitAndExpressionContext,
    BitNotExpressionContext,
    BitOrExpressionContext,
    LogAndExpressionContext,
    LogOrExpressionContext,
    CondExpressionContext,
    AssignExpressionContext,
    TriggerUnitContext,
    TriggerCaseContext,
    CompilationUnitContext,
    TypeDeclarationContext,
    ClassDeclarationContext,
    EnumDeclarationContext,
    EnumConstantsContext,
    InterfaceDeclarationContext,
    TypeListContext,
    ClassBodyContext,
    InterfaceBodyContext,
    ClassBodyDeclarationContext,
    ModifierContext,
    MemberDeclarationContext,
    MethodDeclarationContext,
    ConstructorDeclarationContext,
    FieldDeclarationContext,
    PropertyDeclarationContext,
    InterfaceMethodDeclarationContext,
    VariableDeclaratorsContext,
    VariableDeclaratorContext,
    ArrayInitializerContext,
    TypeRefContext,
    ArraySubscriptsContext,
    TypeNameContext,
    TypeArgumentsContext,
    FormalParametersContext,
    FormalParameterListContext,
    FormalParameterContext,
    QualifiedNameContext,
    LiteralContext,
    AnnotationContext,
    ElementValuePairsContext,
    ElementValuePairContext,
    ElementValueContext,
    ElementValueArrayInitializerContext,
    BlockContext,
    LocalVariableDeclarationStatementContext,
    LocalVariableDeclarationContext,
    StatementContext,
    IfStatementContext,
    SwitchStatementContext,
    WhenControlContext,
    WhenValueContext,
    WhenLiteralContext,
    ForStatementContext,
    WhileStatementContext,
    DoWhileStatementContext,
    TryStatementContext,
    ReturnStatementContext,
    ThrowStatementContext,
    BreakStatementContext,
    ContinueStatementContext,
    InsertStatementContext,
    UpdateStatementContext,
    DeleteStatementContext,
    UndeleteStatementContext,
    UpsertStatementContext,
    MergeStatementContext,
    RunAsStatementContext,
    ExpressionStatementContext,
    PropertyBlockContext,
    GetterContext,
    SetterContext,
    CatchClauseContext,
    FinallyBlockContext,
    ForControlContext,
    ForInitContext,
    EnhancedForControlContext,
    ForUpdateContext,
    ParExpressionContext,
    ExpressionListContext,
    ExpressionContext,
    PrimaryContext,
    MethodCallContext,
    DotMethodCallContext,
    CreatorContext,
    CreatedNameContext,
    IdCreatedNamePairContext,
    NoRestContext,
    ClassCreatorRestContext,
    ArrayCreatorRestContext,
    MapCreatorRestContext,
    MapCreatorRestPairContext,
    SetCreatorRestContext,
    ArgumentsContext,
    SoqlLiteralContext,
    QueryContext,
    SubQueryContext,
    SelectListContext,
    SelectEntryContext,
    FieldNameContext,
    FromNameListContext,
    SubFieldListContext,
    SubFieldEntryContext,
    SoqlFunctionContext,
    TypeOfContext,
    WhenClauseContext,
    ElseClauseContext,
    FieldNameListContext,
    UsingScopeContext,
    WhereClauseContext,
    LogicalExpressionContext,
    ConditionalExpressionContext,
    FieldExpressionContext,
    ComparisonOperatorContext,
    ValueContext,
    ValueListContext,
    CurrencyValueContext,
    WithClauseContext,
    FilteringExpressionContext,
    DataCategorySelectionContext,
    DataCategoryNameContext,
    FilteringSelectorContext,
    GroupByClauseContext,
    OrderByClauseContext,
    FieldOrderListContext,
    FieldOrderContext,
    LimitClauseContext,
    OffsetClauseContext,
    AllRowsClauseContext,
    ForClausesContext,
    BoundExpressionContext,
    DateFormulaContext,
    SignedIntegerContext,
    SoqlIdContext,
    IdContext,
    AnyIdContext
  } from 'apex-parser/lib/ApexParser'

  export interface ApexParserVisitor<Result> extends ParseTreeVisitor<Result> {
    visitSubPrimary?: (ctx: SubPrimaryContext) => Result
    visitThisPrimary?: (ctx: ThisPrimaryContext) => Result
    visitSuperPrimary?: (ctx: SuperPrimaryContext) => Result
    visitLiteralPrimary?: (ctx: LiteralPrimaryContext) => Result
    visitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => Result
    visitIdPrimary?: (ctx: IdPrimaryContext) => Result
    visitSoqlPrimary?: (ctx: SoqlPrimaryContext) => Result
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result
    visitDotExpression?: (ctx: DotExpressionContext) => Result
    visitArrayExpression?: (ctx: ArrayExpressionContext) => Result
    visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result
    visitNewExpression?: (ctx: NewExpressionContext) => Result
    visitCastExpression?: (ctx: CastExpressionContext) => Result
    visitPostOpExpression?: (ctx: PostOpExpressionContext) => Result
    visitPreOpExpression?: (ctx: PreOpExpressionContext) => Result
    visitNegExpression?: (ctx: NegExpressionContext) => Result
    visitArth1Expression?: (ctx: Arth1ExpressionContext) => Result
    visitArth2Expression?: (ctx: Arth2ExpressionContext) => Result
    visitBitExpression?: (ctx: BitExpressionContext) => Result
    visitCmpExpression?: (ctx: CmpExpressionContext) => Result
    visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result
    visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result
    visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result
    visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result
    visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result
    visitLogAndExpression?: (ctx: LogAndExpressionContext) => Result
    visitLogOrExpression?: (ctx: LogOrExpressionContext) => Result
    visitCondExpression?: (ctx: CondExpressionContext) => Result
    visitAssignExpression?: (ctx: AssignExpressionContext) => Result
    visitTriggerUnit?: (ctx: TriggerUnitContext) => Result
    visitTriggerCase?: (ctx: TriggerCaseContext) => Result
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result
    visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result
    visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result
    visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result
    visitEnumConstants?: (ctx: EnumConstantsContext) => Result
    visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result
    visitTypeList?: (ctx: TypeListContext) => Result
    visitClassBody?: (ctx: ClassBodyContext) => Result
    visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result
    visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result
    visitModifier?: (ctx: ModifierContext) => Result
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result
    visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result
    visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result
    visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result
    visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result
    visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result
    visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result
    visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result
    visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result
    visitTypeRef?: (ctx: TypeRefContext) => Result
    visitArraySubscripts?: (ctx: ArraySubscriptsContext) => Result
    visitTypeName?: (ctx: TypeNameContext) => Result
    visitTypeArguments?: (ctx: TypeArgumentsContext) => Result
    visitFormalParameters?: (ctx: FormalParametersContext) => Result
    visitFormalParameterList?: (ctx: FormalParameterListContext) => Result
    visitFormalParameter?: (ctx: FormalParameterContext) => Result
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result
    visitLiteral?: (ctx: LiteralContext) => Result
    visitAnnotation?: (ctx: AnnotationContext) => Result
    visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result
    visitElementValuePair?: (ctx: ElementValuePairContext) => Result
    visitElementValue?: (ctx: ElementValueContext) => Result
    visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result
    visitBlock?: (ctx: BlockContext) => Result
    visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result
    visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result
    visitStatement?: (ctx: StatementContext) => Result
    visitIfStatement?: (ctx: IfStatementContext) => Result
    visitSwitchStatement?: (ctx: SwitchStatementContext) => Result
    visitWhenControl?: (ctx: WhenControlContext) => Result
    visitWhenValue?: (ctx: WhenValueContext) => Result
    visitWhenLiteral?: (ctx: WhenLiteralContext) => Result
    visitForStatement?: (ctx: ForStatementContext) => Result
    visitWhileStatement?: (ctx: WhileStatementContext) => Result
    visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result
    visitTryStatement?: (ctx: TryStatementContext) => Result
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result
    visitThrowStatement?: (ctx: ThrowStatementContext) => Result
    visitBreakStatement?: (ctx: BreakStatementContext) => Result
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result
    visitInsertStatement?: (ctx: InsertStatementContext) => Result
    visitUpdateStatement?: (ctx: UpdateStatementContext) => Result
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result
    visitUndeleteStatement?: (ctx: UndeleteStatementContext) => Result
    visitUpsertStatement?: (ctx: UpsertStatementContext) => Result
    visitMergeStatement?: (ctx: MergeStatementContext) => Result
    visitRunAsStatement?: (ctx: RunAsStatementContext) => Result
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result
    visitPropertyBlock?: (ctx: PropertyBlockContext) => Result
    visitGetter?: (ctx: GetterContext) => Result
    visitSetter?: (ctx: SetterContext) => Result
    visitCatchClause?: (ctx: CatchClauseContext) => Result
    visitFinallyBlock?: (ctx: FinallyBlockContext) => Result
    visitForControl?: (ctx: ForControlContext) => Result
    visitForInit?: (ctx: ForInitContext) => Result
    visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result
    visitForUpdate?: (ctx: ForUpdateContext) => Result
    visitParExpression?: (ctx: ParExpressionContext) => Result
    visitExpressionList?: (ctx: ExpressionListContext) => Result
    visitExpression?: (ctx: ExpressionContext) => Result
    visitPrimary?: (ctx: PrimaryContext) => Result
    visitMethodCall?: (ctx: MethodCallContext) => Result
    visitDotMethodCall?: (ctx: DotMethodCallContext) => Result
    visitCreator?: (ctx: CreatorContext) => Result
    visitCreatedName?: (ctx: CreatedNameContext) => Result
    visitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => Result
    visitNoRest?: (ctx: NoRestContext) => Result
    visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result
    visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result
    visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result
    visitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => Result
    visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result
    visitArguments?: (ctx: ArgumentsContext) => Result
    visitSoqlLiteral?: (ctx: SoqlLiteralContext) => Result
    visitQuery?: (ctx: QueryContext) => Result
    visitSubQuery?: (ctx: SubQueryContext) => Result
    visitSelectList?: (ctx: SelectListContext) => Result
    visitSelectEntry?: (ctx: SelectEntryContext) => Result
    visitFieldName?: (ctx: FieldNameContext) => Result
    visitFromNameList?: (ctx: FromNameListContext) => Result
    visitSubFieldList?: (ctx: SubFieldListContext) => Result
    visitSubFieldEntry?: (ctx: SubFieldEntryContext) => Result
    visitSoqlFunction?: (ctx: SoqlFunctionContext) => Result
    visitTypeOf?: (ctx: TypeOfContext) => Result
    visitWhenClause?: (ctx: WhenClauseContext) => Result
    visitElseClause?: (ctx: ElseClauseContext) => Result
    visitFieldNameList?: (ctx: FieldNameListContext) => Result
    visitUsingScope?: (ctx: UsingScopeContext) => Result
    visitWhereClause?: (ctx: WhereClauseContext) => Result
    visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result
    visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result
    visitFieldExpression?: (ctx: FieldExpressionContext) => Result
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result
    visitValue?: (ctx: ValueContext) => Result
    visitValueList?: (ctx: ValueListContext) => Result
    visitCurrencyValue?: (ctx: CurrencyValueContext) => Result
    visitWithClause?: (ctx: WithClauseContext) => Result
    visitFilteringExpression?: (ctx: FilteringExpressionContext) => Result
    visitDataCategorySelection?: (ctx: DataCategorySelectionContext) => Result
    visitDataCategoryName?: (ctx: DataCategoryNameContext) => Result
    visitFilteringSelector?: (ctx: FilteringSelectorContext) => Result
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result
    visitFieldOrderList?: (ctx: FieldOrderListContext) => Result
    visitFieldOrder?: (ctx: FieldOrderContext) => Result
    visitLimitClause?: (ctx: LimitClauseContext) => Result
    visitOffsetClause?: (ctx: OffsetClauseContext) => Result
    visitAllRowsClause?: (ctx: AllRowsClauseContext) => Result
    visitForClauses?: (ctx: ForClausesContext) => Result
    visitBoundExpression?: (ctx: BoundExpressionContext) => Result
    visitDateFormula?: (ctx: DateFormulaContext) => Result
    visitSignedInteger?: (ctx: SignedIntegerContext) => Result
    visitSoqlId?: (ctx: SoqlIdContext) => Result
    visitId?: (ctx: IdContext) => Result
    visitAnyId?: (ctx: AnyIdContext) => Result
  }
}
