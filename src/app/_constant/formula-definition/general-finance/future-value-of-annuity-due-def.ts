import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FutureValueOfAnnuityDueDef: FormulaDefinition = {
  id: 1,
  title: 'Future Value of Annuity Due',
  subtitle: 'Future Value of Annuity Due',
  defination: [`TThe future value of annuity due formula is used to calculate the ending
  value of a series of payments or cash flows where the first payment is received immediately.
  The first cash flow received immediately is what distinguishes an annuity due from an ordinary
  annuity. An annuity due is sometimes referred to as an immediate annuity.`, `The future value
  of annuity due formula calculates the value at a future date. The use of the future value of
  annuity due formula in real situations is different than that of the present value for an annuity
  due. For example, suppose that an individual or company wants to buy an annuity from someone and
  the first payment is received today. To calculate the price to pay for this particular situation
  would require use of the present value of annuity due formula. However, if an individual is
  wanting to calculate what their balance would be after saving for 5 years in an interest bearing
  account and they choose to put the first cash flow into the account today, the future value of
  annuity due would be used.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
