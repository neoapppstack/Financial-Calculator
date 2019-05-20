import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const RateOfInflationDef: FormulaDefination = {
  id: 1,
  title: 'Rate of Inflation',
  subtitle: 'Rate of Inflation',
  defination: [`The rate of inflation formula measures the percentage change in purchasing power of a particular
  currency. As the cost of prices increase, the purchasing power of the currency decreases.`, `The rate of inflation
  formula shown uses the Consumer Price Index which is released by the Bureau of Labor Statistics in the US. However,
  other similar indices may be used at times. If another index is used, "CPI" in the rate of inflation formula is
  replaced by the alternate index.`, `The subscript "x" refers to the initial consumer price index for the period being
  calculated, or time x. And such, subscript "x+1" would be the ending consumer price index for the period calculated,
  or time x+1.`, `Use of Rate of Inflation Formula`, `The formula for the rate of inflation is primarily used by economists.
  On the financial side, the rate of inflation may be used by corporations to compare expenses, revenues, and profit
  across multiple years.`, `The rate of inflation formula shown is not to be confused with the purchasing power of goods relative to income.
  An example, albeit an extreme example, would be an individual who recently discovers that their income will increase to
  $1,000,000 from $20,000 per year--a 5,000% increase. The individual, unable to hold back excitement, decides to go
  shopping only to discover that a loaf of bread suddenly increased to $300 from $3--a 10,000% increase. The same result
  occurs as the individual purchases more products. Soon the individual realizes that they are worse off than prior to
  the income change. The rate of inflation formula measures only inflation, the 10,000% price increase in the example,
  and does not consider income, the 5,000% income increase in the example, or standard of living.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
