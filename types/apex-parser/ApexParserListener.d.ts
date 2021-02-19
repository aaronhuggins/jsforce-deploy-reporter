import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
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
} from './ApexParser'

export interface ApexParserListener extends ParseTreeListener {
  enterSubPrimary?: (ctx: SubPrimaryContext) => void
  exitSubPrimary?: (ctx: SubPrimaryContext) => void
  enterThisPrimary?: (ctx: ThisPrimaryContext) => void
  exitThisPrimary?: (ctx: ThisPrimaryContext) => void
  enterSuperPrimary?: (ctx: SuperPrimaryContext) => void
  exitSuperPrimary?: (ctx: SuperPrimaryContext) => void
  enterLiteralPrimary?: (ctx: LiteralPrimaryContext) => void
  exitLiteralPrimary?: (ctx: LiteralPrimaryContext) => void
  enterTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void
  exitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void
  enterIdPrimary?: (ctx: IdPrimaryContext) => void
  exitIdPrimary?: (ctx: IdPrimaryContext) => void
  enterSoqlPrimary?: (ctx: SoqlPrimaryContext) => void
  exitSoqlPrimary?: (ctx: SoqlPrimaryContext) => void
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void
  enterDotExpression?: (ctx: DotExpressionContext) => void
  exitDotExpression?: (ctx: DotExpressionContext) => void
  enterArrayExpression?: (ctx: ArrayExpressionContext) => void
  exitArrayExpression?: (ctx: ArrayExpressionContext) => void
  enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void
  exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void
  enterNewExpression?: (ctx: NewExpressionContext) => void
  exitNewExpression?: (ctx: NewExpressionContext) => void
  enterCastExpression?: (ctx: CastExpressionContext) => void
  exitCastExpression?: (ctx: CastExpressionContext) => void
  enterPostOpExpression?: (ctx: PostOpExpressionContext) => void
  exitPostOpExpression?: (ctx: PostOpExpressionContext) => void
  enterPreOpExpression?: (ctx: PreOpExpressionContext) => void
  exitPreOpExpression?: (ctx: PreOpExpressionContext) => void
  enterNegExpression?: (ctx: NegExpressionContext) => void
  exitNegExpression?: (ctx: NegExpressionContext) => void
  enterArth1Expression?: (ctx: Arth1ExpressionContext) => void
  exitArth1Expression?: (ctx: Arth1ExpressionContext) => void
  enterArth2Expression?: (ctx: Arth2ExpressionContext) => void
  exitArth2Expression?: (ctx: Arth2ExpressionContext) => void
  enterBitExpression?: (ctx: BitExpressionContext) => void
  exitBitExpression?: (ctx: BitExpressionContext) => void
  enterCmpExpression?: (ctx: CmpExpressionContext) => void
  exitCmpExpression?: (ctx: CmpExpressionContext) => void
  enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void
  exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void
  enterEqualityExpression?: (ctx: EqualityExpressionContext) => void
  exitEqualityExpression?: (ctx: EqualityExpressionContext) => void
  enterBitAndExpression?: (ctx: BitAndExpressionContext) => void
  exitBitAndExpression?: (ctx: BitAndExpressionContext) => void
  enterBitNotExpression?: (ctx: BitNotExpressionContext) => void
  exitBitNotExpression?: (ctx: BitNotExpressionContext) => void
  enterBitOrExpression?: (ctx: BitOrExpressionContext) => void
  exitBitOrExpression?: (ctx: BitOrExpressionContext) => void
  enterLogAndExpression?: (ctx: LogAndExpressionContext) => void
  exitLogAndExpression?: (ctx: LogAndExpressionContext) => void
  enterLogOrExpression?: (ctx: LogOrExpressionContext) => void
  exitLogOrExpression?: (ctx: LogOrExpressionContext) => void
  enterCondExpression?: (ctx: CondExpressionContext) => void
  exitCondExpression?: (ctx: CondExpressionContext) => void
  enterAssignExpression?: (ctx: AssignExpressionContext) => void
  exitAssignExpression?: (ctx: AssignExpressionContext) => void
  enterTriggerUnit?: (ctx: TriggerUnitContext) => void
  exitTriggerUnit?: (ctx: TriggerUnitContext) => void
  enterTriggerCase?: (ctx: TriggerCaseContext) => void
  exitTriggerCase?: (ctx: TriggerCaseContext) => void
  enterCompilationUnit?: (ctx: CompilationUnitContext) => void
  exitCompilationUnit?: (ctx: CompilationUnitContext) => void
  enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void
  exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void
  enterClassDeclaration?: (ctx: ClassDeclarationContext) => void
  exitClassDeclaration?: (ctx: ClassDeclarationContext) => void
  enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void
  exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void
  enterEnumConstants?: (ctx: EnumConstantsContext) => void
  exitEnumConstants?: (ctx: EnumConstantsContext) => void
  enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void
  exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void
  enterTypeList?: (ctx: TypeListContext) => void
  exitTypeList?: (ctx: TypeListContext) => void
  enterClassBody?: (ctx: ClassBodyContext) => void
  exitClassBody?: (ctx: ClassBodyContext) => void
  enterInterfaceBody?: (ctx: InterfaceBodyContext) => void
  exitInterfaceBody?: (ctx: InterfaceBodyContext) => void
  enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void
  exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void
  enterModifier?: (ctx: ModifierContext) => void
  exitModifier?: (ctx: ModifierContext) => void
  enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void
  exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void
  enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void
  exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void
  enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void
  exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void
  enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void
  exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void
  enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void
  exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void
  enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void
  exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void
  enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void
  exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void
  enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void
  exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void
  enterArrayInitializer?: (ctx: ArrayInitializerContext) => void
  exitArrayInitializer?: (ctx: ArrayInitializerContext) => void
  enterTypeRef?: (ctx: TypeRefContext) => void
  exitTypeRef?: (ctx: TypeRefContext) => void
  enterArraySubscripts?: (ctx: ArraySubscriptsContext) => void
  exitArraySubscripts?: (ctx: ArraySubscriptsContext) => void
  enterTypeName?: (ctx: TypeNameContext) => void
  exitTypeName?: (ctx: TypeNameContext) => void
  enterTypeArguments?: (ctx: TypeArgumentsContext) => void
  exitTypeArguments?: (ctx: TypeArgumentsContext) => void
  enterFormalParameters?: (ctx: FormalParametersContext) => void
  exitFormalParameters?: (ctx: FormalParametersContext) => void
  enterFormalParameterList?: (ctx: FormalParameterListContext) => void
  exitFormalParameterList?: (ctx: FormalParameterListContext) => void
  enterFormalParameter?: (ctx: FormalParameterContext) => void
  exitFormalParameter?: (ctx: FormalParameterContext) => void
  enterQualifiedName?: (ctx: QualifiedNameContext) => void
  exitQualifiedName?: (ctx: QualifiedNameContext) => void
  enterLiteral?: (ctx: LiteralContext) => void
  exitLiteral?: (ctx: LiteralContext) => void
  enterAnnotation?: (ctx: AnnotationContext) => void
  exitAnnotation?: (ctx: AnnotationContext) => void
  enterElementValuePairs?: (ctx: ElementValuePairsContext) => void
  exitElementValuePairs?: (ctx: ElementValuePairsContext) => void
  enterElementValuePair?: (ctx: ElementValuePairContext) => void
  exitElementValuePair?: (ctx: ElementValuePairContext) => void
  enterElementValue?: (ctx: ElementValueContext) => void
  exitElementValue?: (ctx: ElementValueContext) => void
  enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void
  exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void
  enterBlock?: (ctx: BlockContext) => void
  exitBlock?: (ctx: BlockContext) => void
  enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void
  exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void
  enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void
  exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void
  enterStatement?: (ctx: StatementContext) => void
  exitStatement?: (ctx: StatementContext) => void
  enterIfStatement?: (ctx: IfStatementContext) => void
  exitIfStatement?: (ctx: IfStatementContext) => void
  enterSwitchStatement?: (ctx: SwitchStatementContext) => void
  exitSwitchStatement?: (ctx: SwitchStatementContext) => void
  enterWhenControl?: (ctx: WhenControlContext) => void
  exitWhenControl?: (ctx: WhenControlContext) => void
  enterWhenValue?: (ctx: WhenValueContext) => void
  exitWhenValue?: (ctx: WhenValueContext) => void
  enterWhenLiteral?: (ctx: WhenLiteralContext) => void
  exitWhenLiteral?: (ctx: WhenLiteralContext) => void
  enterForStatement?: (ctx: ForStatementContext) => void
  exitForStatement?: (ctx: ForStatementContext) => void
  enterWhileStatement?: (ctx: WhileStatementContext) => void
  exitWhileStatement?: (ctx: WhileStatementContext) => void
  enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void
  exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void
  enterTryStatement?: (ctx: TryStatementContext) => void
  exitTryStatement?: (ctx: TryStatementContext) => void
  enterReturnStatement?: (ctx: ReturnStatementContext) => void
  exitReturnStatement?: (ctx: ReturnStatementContext) => void
  enterThrowStatement?: (ctx: ThrowStatementContext) => void
  exitThrowStatement?: (ctx: ThrowStatementContext) => void
  enterBreakStatement?: (ctx: BreakStatementContext) => void
  exitBreakStatement?: (ctx: BreakStatementContext) => void
  enterContinueStatement?: (ctx: ContinueStatementContext) => void
  exitContinueStatement?: (ctx: ContinueStatementContext) => void
  enterInsertStatement?: (ctx: InsertStatementContext) => void
  exitInsertStatement?: (ctx: InsertStatementContext) => void
  enterUpdateStatement?: (ctx: UpdateStatementContext) => void
  exitUpdateStatement?: (ctx: UpdateStatementContext) => void
  enterDeleteStatement?: (ctx: DeleteStatementContext) => void
  exitDeleteStatement?: (ctx: DeleteStatementContext) => void
  enterUndeleteStatement?: (ctx: UndeleteStatementContext) => void
  exitUndeleteStatement?: (ctx: UndeleteStatementContext) => void
  enterUpsertStatement?: (ctx: UpsertStatementContext) => void
  exitUpsertStatement?: (ctx: UpsertStatementContext) => void
  enterMergeStatement?: (ctx: MergeStatementContext) => void
  exitMergeStatement?: (ctx: MergeStatementContext) => void
  enterRunAsStatement?: (ctx: RunAsStatementContext) => void
  exitRunAsStatement?: (ctx: RunAsStatementContext) => void
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void
  enterPropertyBlock?: (ctx: PropertyBlockContext) => void
  exitPropertyBlock?: (ctx: PropertyBlockContext) => void
  enterGetter?: (ctx: GetterContext) => void
  exitGetter?: (ctx: GetterContext) => void
  enterSetter?: (ctx: SetterContext) => void
  exitSetter?: (ctx: SetterContext) => void
  enterCatchClause?: (ctx: CatchClauseContext) => void
  exitCatchClause?: (ctx: CatchClauseContext) => void
  enterFinallyBlock?: (ctx: FinallyBlockContext) => void
  exitFinallyBlock?: (ctx: FinallyBlockContext) => void
  enterForControl?: (ctx: ForControlContext) => void
  exitForControl?: (ctx: ForControlContext) => void
  enterForInit?: (ctx: ForInitContext) => void
  exitForInit?: (ctx: ForInitContext) => void
  enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void
  exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void
  enterForUpdate?: (ctx: ForUpdateContext) => void
  exitForUpdate?: (ctx: ForUpdateContext) => void
  enterParExpression?: (ctx: ParExpressionContext) => void
  exitParExpression?: (ctx: ParExpressionContext) => void
  enterExpressionList?: (ctx: ExpressionListContext) => void
  exitExpressionList?: (ctx: ExpressionListContext) => void
  enterExpression?: (ctx: ExpressionContext) => void
  exitExpression?: (ctx: ExpressionContext) => void
  enterPrimary?: (ctx: PrimaryContext) => void
  exitPrimary?: (ctx: PrimaryContext) => void
  enterMethodCall?: (ctx: MethodCallContext) => void
  exitMethodCall?: (ctx: MethodCallContext) => void
  enterDotMethodCall?: (ctx: DotMethodCallContext) => void
  exitDotMethodCall?: (ctx: DotMethodCallContext) => void
  enterCreator?: (ctx: CreatorContext) => void
  exitCreator?: (ctx: CreatorContext) => void
  enterCreatedName?: (ctx: CreatedNameContext) => void
  exitCreatedName?: (ctx: CreatedNameContext) => void
  enterIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void
  exitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void
  enterNoRest?: (ctx: NoRestContext) => void
  exitNoRest?: (ctx: NoRestContext) => void
  enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void
  exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void
  enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void
  exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void
  enterMapCreatorRest?: (ctx: MapCreatorRestContext) => void
  exitMapCreatorRest?: (ctx: MapCreatorRestContext) => void
  enterMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void
  exitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void
  enterSetCreatorRest?: (ctx: SetCreatorRestContext) => void
  exitSetCreatorRest?: (ctx: SetCreatorRestContext) => void
  enterArguments?: (ctx: ArgumentsContext) => void
  exitArguments?: (ctx: ArgumentsContext) => void
  enterSoqlLiteral?: (ctx: SoqlLiteralContext) => void
  exitSoqlLiteral?: (ctx: SoqlLiteralContext) => void
  enterQuery?: (ctx: QueryContext) => void
  exitQuery?: (ctx: QueryContext) => void
  enterSubQuery?: (ctx: SubQueryContext) => void
  exitSubQuery?: (ctx: SubQueryContext) => void
  enterSelectList?: (ctx: SelectListContext) => void
  exitSelectList?: (ctx: SelectListContext) => void
  enterSelectEntry?: (ctx: SelectEntryContext) => void
  exitSelectEntry?: (ctx: SelectEntryContext) => void
  enterFieldName?: (ctx: FieldNameContext) => void
  exitFieldName?: (ctx: FieldNameContext) => void
  enterFromNameList?: (ctx: FromNameListContext) => void
  exitFromNameList?: (ctx: FromNameListContext) => void
  enterSubFieldList?: (ctx: SubFieldListContext) => void
  exitSubFieldList?: (ctx: SubFieldListContext) => void
  enterSubFieldEntry?: (ctx: SubFieldEntryContext) => void
  exitSubFieldEntry?: (ctx: SubFieldEntryContext) => void
  enterSoqlFunction?: (ctx: SoqlFunctionContext) => void
  exitSoqlFunction?: (ctx: SoqlFunctionContext) => void
  enterTypeOf?: (ctx: TypeOfContext) => void
  exitTypeOf?: (ctx: TypeOfContext) => void
  enterWhenClause?: (ctx: WhenClauseContext) => void
  exitWhenClause?: (ctx: WhenClauseContext) => void
  enterElseClause?: (ctx: ElseClauseContext) => void
  exitElseClause?: (ctx: ElseClauseContext) => void
  enterFieldNameList?: (ctx: FieldNameListContext) => void
  exitFieldNameList?: (ctx: FieldNameListContext) => void
  enterUsingScope?: (ctx: UsingScopeContext) => void
  exitUsingScope?: (ctx: UsingScopeContext) => void
  enterWhereClause?: (ctx: WhereClauseContext) => void
  exitWhereClause?: (ctx: WhereClauseContext) => void
  enterLogicalExpression?: (ctx: LogicalExpressionContext) => void
  exitLogicalExpression?: (ctx: LogicalExpressionContext) => void
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  enterFieldExpression?: (ctx: FieldExpressionContext) => void
  exitFieldExpression?: (ctx: FieldExpressionContext) => void
  enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void
  exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void
  enterValue?: (ctx: ValueContext) => void
  exitValue?: (ctx: ValueContext) => void
  enterValueList?: (ctx: ValueListContext) => void
  exitValueList?: (ctx: ValueListContext) => void
  enterCurrencyValue?: (ctx: CurrencyValueContext) => void
  exitCurrencyValue?: (ctx: CurrencyValueContext) => void
  enterWithClause?: (ctx: WithClauseContext) => void
  exitWithClause?: (ctx: WithClauseContext) => void
  enterFilteringExpression?: (ctx: FilteringExpressionContext) => void
  exitFilteringExpression?: (ctx: FilteringExpressionContext) => void
  enterDataCategorySelection?: (ctx: DataCategorySelectionContext) => void
  exitDataCategorySelection?: (ctx: DataCategorySelectionContext) => void
  enterDataCategoryName?: (ctx: DataCategoryNameContext) => void
  exitDataCategoryName?: (ctx: DataCategoryNameContext) => void
  enterFilteringSelector?: (ctx: FilteringSelectorContext) => void
  exitFilteringSelector?: (ctx: FilteringSelectorContext) => void
  enterGroupByClause?: (ctx: GroupByClauseContext) => void
  exitGroupByClause?: (ctx: GroupByClauseContext) => void
  enterOrderByClause?: (ctx: OrderByClauseContext) => void
  exitOrderByClause?: (ctx: OrderByClauseContext) => void
  enterFieldOrderList?: (ctx: FieldOrderListContext) => void
  exitFieldOrderList?: (ctx: FieldOrderListContext) => void
  enterFieldOrder?: (ctx: FieldOrderContext) => void
  exitFieldOrder?: (ctx: FieldOrderContext) => void
  enterLimitClause?: (ctx: LimitClauseContext) => void
  exitLimitClause?: (ctx: LimitClauseContext) => void
  enterOffsetClause?: (ctx: OffsetClauseContext) => void
  exitOffsetClause?: (ctx: OffsetClauseContext) => void
  enterAllRowsClause?: (ctx: AllRowsClauseContext) => void
  exitAllRowsClause?: (ctx: AllRowsClauseContext) => void
  enterForClauses?: (ctx: ForClausesContext) => void
  exitForClauses?: (ctx: ForClausesContext) => void
  enterBoundExpression?: (ctx: BoundExpressionContext) => void
  exitBoundExpression?: (ctx: BoundExpressionContext) => void
  enterDateFormula?: (ctx: DateFormulaContext) => void
  exitDateFormula?: (ctx: DateFormulaContext) => void
  enterSignedInteger?: (ctx: SignedIntegerContext) => void
  exitSignedInteger?: (ctx: SignedIntegerContext) => void
  enterSoqlId?: (ctx: SoqlIdContext) => void
  exitSoqlId?: (ctx: SoqlIdContext) => void
  enterId?: (ctx: IdContext) => void
  exitId?: (ctx: IdContext) => void
  enterAnyId?: (ctx: AnyIdContext) => void
  exitAnyId?: (ctx: AnyIdContext) => void
}
