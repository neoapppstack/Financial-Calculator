import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const AnnuityPaymentFromFutureValueDef: FormulaDefinition = {
  id: 1,
  title: 'Annuity Payment - FV',
  subtitle: 'Annuity Payment - FV',
  defination: [`TThe annuity payment formula shown above is used to calculate the cash
  flows of an annuity when future value is known. An annuity is denoted as a series of
  periodic payments.`, `The annuity payment formula shown here is specifically used when
  the future value is known, as opposed to the annuity payment formula used when present
  value is known. There are not only mathematical differences between calculating an
  annuity when present value is known and when future value is known, but also differences
  in the real life application of the formulas. `, `For example, if an individual is wanting
  to calculate the payments on a loan, the original loan balance would be considered the
  present value and the payment formula would accommodate this known variable. However,
  if an individual is wanting to calculate how much they need to save per year in an interest
  bearing account to have a certain balance after a specific period of time, then this wanted
  balance would be considered the future value. The latter example would use the annuity payment
  using future value formula as the balance is increasing instead of decreasing.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
