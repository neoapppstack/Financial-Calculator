import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const ReturnOnEquityDef: FormulaDefinition = {

  id: 1,
  title: 'Return on Equity (ROE)',
  subtitle: 'Return on Equity (ROE)',
  defination: [`The formula for return on equity, sometimes abbreviated as ROE, is a company's net income divided by its
  average stockholder's equity. The numerator of the return on equity formula, net income, can be found on a company's
  income statement. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
