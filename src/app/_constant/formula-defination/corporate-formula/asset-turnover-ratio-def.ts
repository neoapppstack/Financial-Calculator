import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const AssetTurnoverRatioDef: FormulaDefination = {
  id: 1,
  title: 'Asset Turnover Ratio',
  subtitle: 'Asset Turnover Ratio',
  defination: [`The formula for the asset turnover ratio evaluates how well a company is utilizing its assets to produce revenue.`, `The
  numerator of the asset turnover ratio formula shows revenues which is found on a company's income statement and the denominator shows
  total assets which is found on a company's balance sheet. Total assets should be averaged over the period of time that is being
  evaluated. For example, if a company is using 2009 revenues in the formula to calculate the asset turnover ratio, then the total
  assets at the beginning and end of 2009 should be averaged.`, `It should be noted that the asset turnover ratio formula does not
  look at how well a company is earning profits relative to assets. The asset turnover ratio formula only looks at revenues and not
  profits. This is the distinct difference between return on assets (ROA) and the asset turnover ratio, as return on assets looks at
  net income, or profit, relative to assets. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
