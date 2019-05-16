import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const AnnuityDuePaymentFvDef: FormulaDefination = {
  id: 1,
  title: 'Annuity Due Payment - FV',
  defination: [`The annuity due payment formula using future value is used to calculate
  each equal cash flow or payment of a series of cash flows when the future value is known.
  This formula is specific to annuities where the initial cash flow is received immediately.`,
  `Using the future value of an annuity due to calculate payments is required for different
  situations than when present value is used. For example, suppose that an individual would
  like to calculate the amount they would need to deposit per year, starting today, in an interest
  bearing account in order to have a certain balance after a certain period of time. The balance
  wanted after the allotted time would be considered the future value. The balance of the annuity
  would be increasing. This situation would require using the annuity due payment formula using
  future value.`, `However, if an individual would like to determine how much to withdraw from
  their current balance per year, starting today, in order for their current balance to last a
  certain period of time, then the balance would be decreasing. In this situation, the payment
  for the annuity due would be calculated from present value, or the initial balance.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
