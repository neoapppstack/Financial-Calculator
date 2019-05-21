import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PvOfStockWithConstantGrowthDef: FormulaDefinition = {
  id: 1,
  title: 'Present Value of Stock - Constant Growth',
  subtitle: 'Present Value of Stock - Constant Growth',
  defination: [`The formula for the present value of a stock with constant growth is the estimated dividends to be paid divided by
  the difference between the required rate of return and the growth rate.`, `The present value of a stock with constant growth is
  one of the formulas used in the dividend discount model, specifically relating to stocks that the theory assumes will grow
  perpetually. The dividend discount model is one method used for valuing stocks based on the present value of future cash flows,
  or earnings.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
