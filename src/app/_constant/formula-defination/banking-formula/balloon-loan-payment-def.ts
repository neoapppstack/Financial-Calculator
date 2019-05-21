import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const BalloonLoanPaymentDef: FormulaDefination = {
  id: 1,
  title: 'Payments on a Balloon Loan',
  subtitle: 'Payments on a Balloon Loan',
  defination: [`The balloon loan payment formula is used to calculate the payments on a loan that has a balance remaining
  after all periodic payments are made. Examples of loans that may use the balloon loan payment formula would be auto leases,
  balloon mortgages, and any other form of loan not paid in full at its end date.`, `The formula for a balloon loan payment
  could also be used for any form of annuity where a balance is left after all periodic cash flows are made. An annuity is
  simply a series of periodic payments. An example of how this formula could be applied in a non-loan related way would be
  if an individual has $11,000 sitting in their interest account that must last them 2 years, and they need to have a balance
  of $5,000 at the end of the 2nd year. The monthly amount withdrawn could be calculated using the balloon loan payment
  formula.`, `One may be enticed to calculate the example above by simply subtracting $5,000 from $11,000 and calculating
  the payment based on an ordinary annuity of $6,000. However, one must consider that the $5,000 will earn interest over
  the 2 years leaving a balance higher than $5,000 after the 2nd year. This may be acceptable for a smaller amount or for
  quick calculations in ordinary life, however it is not the exact way to calculate the periodic payment.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
