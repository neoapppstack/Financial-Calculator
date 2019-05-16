import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const SolveForNumberOfPeriodsPvAndFvDef: FormulaDefination = {
  id: 1,
  title: 'Solve for Number of Periods - PV & FV',
  subtitle: 'Solve for Number of Periods - PV & FV',
  defination: [`The formula for solving for the number of periods shown at the top of this
  page is used to calculate the length of time required for a single cash flow(present value)
   to reach a certain amount(future value) based on the time value of money. In other words,
   this formula is used to calculate the length of time a present value would need to reach
   the future value, given a certain interest rate.`, `The formula for solving for number
   of periods may also be referred to as solving for n, solving for term, or solving for
   time. Solving for n originates from the present value and future value formulas in which
   the variable n denotes the number of periods.`, `It is important to keep in mind that the
   number of periods and periodic rate should match one another. For example, if the rate is
   compounded monthly, then the monthly rate would be used and the number of periods would
   reflect the number of months. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
