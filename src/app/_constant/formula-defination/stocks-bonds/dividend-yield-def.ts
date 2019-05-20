import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DividendYieldDef: FormulaDefination = {
  id: 1,
  title: 'Dividend Yield (Stock)',
  subtitle: 'Dividend Yield (Stock)',
  defination: [`The formula for the dividend yield is used to calculate the percentage return on a stock based solely on dividends.
  The total return on a stock is the combination of dividends and appreciation of a stock.`, `The dividends paid for a company can
  be found on the statement of retained earnings, which can then be used to calculate dividends per share.`, `Use of Dividend Yield
  Formula`, `The dividend yield formula can be used by investors who are looking for increasing or declining trends of the dividend
  yield. On a broader level, a company that is paying less in dividends relative to its price may be having problems or it could be
  retaining more of a percentage of its net income for growth. When evaluating a stock, it is important to consider the overall
  company and how much net income it is retaining as reinvesting its net income could lead to growth and an appreciation of the
  stock price.`, `The formula for dividend yield may be of greater interest to investors who rely on dividends from their investments.
  However, a lower dividend yield does not imply lower dividends as the price could have substantially increased. As stated before,
  a trend of a declining dividend yield should only warrant investigation and not an immediate dismissal of the investment.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
