import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const ReturnOnAssetsDef: FormulaDefination = {

  id: 1,
  title: 'Return on Assets',
  subtitle: 'Return on Assets',
  defination: [`The return on assets formula, sometimes abbreviated as ROA, is a company's net income divided by its average of total
  assets. The return on assets formula looks at the ability of a company to utilize its assets to gain a net profit.`, `Net income in
  the numerator of the return on assets formula can be found on a company's income statement. Net income is the amount earned by a
  company after subtracting out the expenses incurred, including depreciation and taxes.`, `Average total assets in the denominator
  of the return on assets formula is found on a company's balance sheet. The average of total assets should be used based on the
  period being evaluated. For example, if an investor is calculating a company's 2015 return on assets, the beginning and ending
  total assets for that year should be averaged.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
