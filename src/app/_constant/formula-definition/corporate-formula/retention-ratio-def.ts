import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const RetentionRatioDef: FormulaDefinition = {

  id: 1,
  title: 'Retention Ratio',
  subtitle: 'Retention Ratio',
  defination: [`The retention ratio, sometimes referred to as the plowback ratio, is the amount of retained earnings
  relative to earnings. Earnings can be referred to as net income and is found on the income statement. Retained earnings
  is shown in the numerator of the formula as net income minus dividends.`, `The retention ratio formula is an important
  component to other financial formulas, particularly growth formulas. The retention ratio formula looks at how much is
  kept by the company, as opposed to being paid out to common stock shareholders. Whatever amount the company retains,
  will be reinvested for growth in the company. A company's retained earnings could be considered an opportunity cost of
  paying dividends for stockholders to invest elsewhere.`, `A company that retains a large portion of its net income,
  will anticipate having high growth or opportunities to expand its business. High retention ratios are generally seen
  in growing companies more than established blue chip companies, but many other factors, such as the type of industry
  and stability of the overall economy, are considered as well.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
