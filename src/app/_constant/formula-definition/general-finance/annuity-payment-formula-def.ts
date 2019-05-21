import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const AnnuityPaymentFormulaDef: FormulaDefinition = {
  id: 1,
  title: 'Annuity Payment (PV)',
  subtitle: 'Annuity Payment (PV)',
  defination: [`The annuity payment formula is used to calculate the periodic payment
  on an annuity. An annuity is a series of periodic payments that are received at a
  future date. The present value portion of the formula is the initial payout, with
  an example being the original payout on an amortized loan.`, `The annuity payment
  formula shown is for ordinary annuities. This formula assumes that the rate does
  not change, the payments stay the same, and that the first payment is one period
  away. An annuity that grows at a proportionate rate would use the growing annuity
  payment formula. Otherwise, an annuity that changes the payment and/or rate would
  need to be adjusted for each change. An annuity that has its first payment due at
  the beginning would use the annuity due payment formula and the deferred annuity
  payment formula would have a payment due at a later date.`, ` The annuity payment
  formula can be used for amortized loans, income annuities, structured settlements,
  lottery payouts(see annuity due payment formula if first payment starts immediately),
  and any other type of constant periodic payments.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
