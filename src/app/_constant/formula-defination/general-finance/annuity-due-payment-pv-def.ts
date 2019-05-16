import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const AnnuityDuePaymentPvDef: FormulaDefination = {
  id: 1,
  title: 'Annuity Due Payment - PV',
  subtitle: 'Annuity Due Payment - PV',
  defination: [`The annuity due payment formula using present value is used to calculate
  each installment of a series of cash flows or payments when the first installment is
  received immediately. This particular formula uses the present value of the cash flows
  to calculate the payment.`, `Using present value versus using future value to calculate
  the payments on an annuity due depends on the situation. For example, if an individual
  is wanting to calculate the amount needed to save per year, starting today, in order to
  have a balance of $5000 after 5 years in an interest account, then the future value version
  would be used as $5,000 is the future value. This balance for this example would be increasing
  until it reaches the future value. However, the annuity due payment formula using present value
  would be used in situations where the balance is decreasing such as a periodic payout of the
  existing balance in an interest account.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
