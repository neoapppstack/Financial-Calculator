import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const CapitalGainsYielddDef: FormulaDefinition = {
  id: 1,
  title: 'Capital Gains Yield',
  subtitle: 'Capital Gains Yield',
  defination: [`The formula for the capital gains yield is used to calculate the return on a stock based solely on the appreciation
  of the stock. The formula for capital gains yield does not include dividends paid on the stock, which can be found using the dividend
  yield. The capital gains yield and dividend yield is combined to calculate the total stock return.`,  `The capital gains yield formula
  uses the rate of change formula. Calculating the capital gains yield is effectively calculating the rate of change of the stock price.
  The rate of change can be found by subtracting an ending amount from the original amount then divided by the original amount.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
