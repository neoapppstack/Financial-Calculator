import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const EarningsPerShareDef: FormulaDefinition = {
  id: 1,
  title: 'Earnings Per Share',
  subtitle: 'Earnings Per Share',
  defination: [`The formula for earnings per share, or EPS, is a company's net income expressed on a per share basis. Net income for a
  particular company can be found on its income statement. It is important to note that the earnings per share formula only references
  common stock and any preferred stock dividends is subtracted from the net income, if applicable.`, `Per Share`, `The denominator of
  the earnings per share is the weighted average of outstanding shares of common stock. When the amount of common shares changes mid-year,
  the "per share" portion requires additional calculation. The per share portion is weighted based on the length of time each number of
  shares is in effect.`, `An example of the weighted average would be a company who has 100,000 outstanding common shares for 9 months
  and due to issuing new common stocks, has 120,000 outstanding shares for the remaining 3 months. The weight for 100,000 shares would
  be 9/12(.75) and the weight for 120,000 shares would be 3/12(.25).`, `To calculate the weighted average from the example: `,
  `(.75)100,000 + (.25)120,000 = 75,000 + 30,000 = 105,000`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
