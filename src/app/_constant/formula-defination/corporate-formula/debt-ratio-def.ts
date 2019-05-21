import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DebtRatioDef: FormulaDefination = {

  id: 1,
  title: 'Debt Coverage Ratio',
  subtitle: 'Debt Coverage Ratio',
  defination: [`
  The formula for the debt ratio is total liabilities divided by total assets. The debt ratio shown above is used in corporate finance
  and should not be confused with the debt to income ratio, sometimes shortened to debt ratio, used in consumer lending.`, `The debt
  ratio is a financial leverage ratio used along with other financial leverage ratios to measure a company's ability to handle its
  obligations. If a company is overleveraged, i.e. has too much debt, they may find it difficult to maintain their solvency and/or
  acquire new debt. Just as in consumer loans, companies are evaluated when taking on new obligations to determine their risk of
  non-repayment.`, `Both the total liabilities and total assets can be found on a company's balance sheet.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
