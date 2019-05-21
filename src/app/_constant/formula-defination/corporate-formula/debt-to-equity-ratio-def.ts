import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DebtToEquityRatioDef: FormulaDefination = {

  id: 1,
  title: 'Debt to Equity Ratio (D/E)',
  subtitle: 'Debt to Equity Ratio (D/E)',
  defination: [`The formula for the debt to equity ratio is total liabilities divided by total equity. The debt to equity ratio is
  a financial leverage ratio. Financial leverage ratios are used to measure a company's ability to handle its long term and short
  term obligations.`, `Both debt and equity will be found on a company's balance sheet. Debt may show as total liabilities and
  equity may show as total stockholder's equity.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
