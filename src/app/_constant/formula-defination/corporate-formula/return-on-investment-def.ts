import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const ReturnOnInvestmentDef: FormulaDefination = {

  id: 1,
  title: 'Return on Investment',
  subtitle: 'Return on Investment',
  defination: [`The formula for return on investment, sometimes referred to as ROI or rate of return, measures the percentage return
  on a particular investment. ROI is used to measure profitability for a given amount of time.`, `The return on investment formula
  is mechanically similar to other rate of change formulas, an example being rate of inflation. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
