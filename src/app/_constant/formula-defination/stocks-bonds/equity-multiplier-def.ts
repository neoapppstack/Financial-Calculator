import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const EquityMultiplierDef: FormulaDefination = {
  id: 1,
  title: 'Equity Multiplier',
  subtitle: 'Equity Multiplier',
  defination: [`The formula for equity multiplier is total assets divided by stockholder's equity. Equity multiplier is a financial
  leverage ratio that evaluates a company's use of debt to purchase assets.`, `Use of Equity Multiplier Formula`, `The equity multiplier
  formula is used in the return on equity DuPont formula for the financial leverage portion of DuPont analysis. Broadly speaking,
  financial leverage is used in financial analysis to evaluate a company's use of debt.`, `To understand how the equity multiplier
  formula is related to debt, it should be noted that in finance, a company's assets equal debt plus equity. Debt is not specifically
  referenced in the equity multiplier formula, but it is an underlying factor in that total assets in the numerator of the formula
  for the equity multiplier includes debt. This can be shown by restating total assets in the equity multiplier formula as debt plus
  equity.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
