import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const DoublingTimeContinuousCompoundingDef: FormulaDefinition = {
  id: 1,
  title: 'Doubling Time - Continuous Compounding',
  subtitle: 'Doubling Time - Continuous Compounding',
  defination: [`The doubling time formula with continuous compounding is the natural log of
  2 divided by the rate of return.`, `The formula for doubling time with continuous compounding
  is used to calculate the length of time it takes doubles one's money in an account or
  investment that has continuous compounding.`, `It is important to note that this formula
  will return a time to double based on the term of the rate. For example, if the monthly
  rate is used, the answer to the formula will return the number of months it takes to double.
  If the annual rate is used, the answer will then reflect the number of years to double.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
