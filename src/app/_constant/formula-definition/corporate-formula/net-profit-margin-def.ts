import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const NetProfitMarginDef: FormulaDefinition = {

  id: 1,
  title: 'Net Profit Margin',
  subtitle: 'Net Profit Margin',
  defination: [`The net profit margin formula looks at how much of a company's revenues are kept as net income. The net profit
  margin is generally expressed as a percentage. Both net income and revenues can be found on a company's income statement.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
