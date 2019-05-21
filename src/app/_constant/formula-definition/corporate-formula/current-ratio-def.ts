import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const CurrentRatioDef: FormulaDefinition = {

  id: 1,
  title: 'Contribution Margin',
  subtitle: 'Contribution Margin',
  defination: [`The Current Ratio provides a calculable means to determining a company's liquidity in the short term.
  The terms of the equation Current Assets and Current Liabilities references the assets that can be realized or the
  liabilities that are payable in less than a year.`, `Although the Current Ratio formula is fairly simplistic, a
  company's short term liquidity is important to maintaining a financially sound company. A company that can not
  maintain their short term debt will quickly become inoperable even if they expect to receive payment on their
  sales in the future.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
