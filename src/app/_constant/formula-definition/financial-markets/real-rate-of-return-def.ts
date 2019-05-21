import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const RealRateOfReturnDef: FormulaDefinition = {
  id: 1,
  title: 'Real Rate of Return',
  subtitle: 'Real Rate of Return',
  defination: [`The real rate of return formula is the sum of one plus the nominal rate divided by the sum of one plus
  the inflation rate which then is subtracted by one. The formula for the real rate of return can be used to determine
  the effective return on an investment after adjusting for inflation.`, `The nominal rate is the stated rate or normal
  return that is not adjusted for inflation.`, `The rate of inflation is calculated based on the changes in price indices
  which are the price on a group of goods. One of the most commonly used price indices is the consumer price index(CPI).
  Although the consumer price index is widely used, a company or investor may want to consider using another price index
  or even their own group of goods that relates more to their business when calculating the real rate of return.`, `For
  quick calculation, an individual may choose to approximate the real rate of return by using the simple formula of nominal
  rate - inflation rate.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
