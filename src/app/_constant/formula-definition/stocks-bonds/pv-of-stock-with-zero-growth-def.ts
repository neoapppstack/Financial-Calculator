import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PvOfStockWithZeroGrowthDef: FormulaDefinition = {
  id: 1,
  title: 'PV of Stock - Zero Growth',
  subtitle: 'PV of Stock - Zero Growth',
  defination: [`The formula for the present value of a stock with zero growth is dividends per period divided by the required return per
  period. The present value of stock formulas are not to be considered an exact or guaranteed approach to valuing a stock but is a more
  theoretical approach.`, `The present value of a stock formula used above is specific to stocks that have zero growth, or no growth.
  It is important to remember that the period used for both dividends and the required return must match. For example, if one is using
  annual dividends, then the annual return must be used.`, `Use of the PV of a Stock with Zero Growth`, `As stated above, the present
  value of a stock with no growth formula is more conceptual than forcefully implemented in every circumstance. The general idea is that
  a stock is essentially like any other form of investment and should be valued based on future cash flows. In practice, investors and
  analysts may take various factors besides only dividends into consideration. Examples of other considerations may be expected future
  earnings based on news, appreciation of a stock due to retained earnings, and overall economy (inflation, production, and capital).
  Also, there are various methods or models used in trying to value a stock.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
