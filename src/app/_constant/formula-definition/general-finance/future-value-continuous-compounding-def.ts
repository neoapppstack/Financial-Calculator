import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FutureValueContinuousCompoundingDef: FormulaDefinition = {
  id: 1,
  title: 'FV - Continuous Compounding',
  subtitle: 'FV - Continuous Compounding',
  defination: [`The future value with continuous compounding formula is used in calculating
  the later value of a current sum of money. Use of the future value with continuous
  compounding formula requires understanding of 3 general financial concepts, which are
  time value of money, future value as it applies to the time value of money, and
  continuous compounding.`, `FV with Continuous Compounding Formula`, `
  The future value with continuous compounding formula is used in calculating the later value
  of a current sum of money. Use of the future value with continuous compounding formula requires
   understanding of 3 general financial concepts, which are time value of money, future value
   as it applies to the time value of money, and continuous compounding.
  Time Value of Money, Future Value, and Continuous Compounding`, `Future Value - Future value
  expands upon the idea of time value of money in that it quantifies the amount required at a
  later date. For example, suppose that an individual has a choice between receiving $1000 today
  or $1050 one year from today. Is the additional $50 worth waiting one year for? Can the
  individual invest elsewhere and make a higher return? Could the individual use the $1000 now
  for a higher "utility of enjoyment" than the $50 warrants? The future value with continuous
  compounding formula calculates the later value when there is continuous compounding.`,`Continuous
  Compounding - Continuous compounding is compounding that is in constant motion as opposed
  to incremental steps. Continuous
  compounding is considered to have an infinite amount of compounding periods for a certain
  period of time because there is no incremental steps as found in monthly or annual compounding.`
  , `Particularly the last 2 of these concepts lends to the actual formula for future value with
  continuous compounding.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
