import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const TotalStockReturnDef: FormulaDefination = {
  id: 1,
  title: 'Total Stock Return',
  subtitle: 'Total Stock Return',
  defination: [`The formula for the total stock return is the appreciation in the price plus any dividends paid, divided by the
  original price of the stock. The income sources from a stock is dividends and its increase in value. The first portion of the
  numerator of the total stock return formula looks at how much the value has increased (P1 - P0). The denominator of the formula
  to calculate a stock's total return is the original price of the stock which is used due to being the original amount invested.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
