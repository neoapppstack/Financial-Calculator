import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DebtCoverageRatioDef: FormulaDefination = {

  id: 1,
  title: 'Debt Coverage Ratio',
  subtitle: 'Debt Coverage Ratio',
  defination: [`The formula for debt coverage ratio is net operating income divided by debt service. The debt coverage ratio is
  used in banking to determine a companies ability to generate enough income in its operations to cover the expense of a debt.
  On a broader level, it may also be used internally by a company for the same reason.`, `A company's net operating income is
  its revenues minus its operating expenses. For comparison, a company's net income considers interest expenses on debt, taxes,
  and income not earned in its natural operations.`, `A company's net operating income can be found on its income statement.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
