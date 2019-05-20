import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DividendPayoutRatioDef: FormulaDefination = {
  id: 1,
  title: 'Dividend Payout Ratio',
  subtitle: 'Dividend Payout Ratio',
  defination: [`The dividend payout ratio is the amount of dividends paid to stockholders relative to the amount of
  total net income of a company. The amount that is not paid out in dividends to stockholders is held by the company
  for growth. The amount that is kept by the company is called retained earnings.`, `Net income shown in the formula can be
  found on the company's income statement.`, `This formula is used by some when considering whether to invest in a profitable
  company that pays out dividends versus a profitable company that has high growth potential. In other words, this formula
  takes into consideration steady income versus reinvestment for possible future earnings, assuming the company has a net income.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
