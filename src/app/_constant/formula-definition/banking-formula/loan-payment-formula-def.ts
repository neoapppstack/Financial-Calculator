import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const LoanPaymentFormulaDef: FormulaDefinition = {
  id: 1,
  title: 'Loan Payment',
  subtitle: 'Loan Payment',
  defination: [`The loan payment formula is used to calculate the payments on a loan. The formula used to calculate loan payments
  is exactly the same as the formula used to calculate payments on an ordinary annuity. A loan, by definition, is an annuity, in
  that it consists of a series of future periodic payments.`, `The PV, or present value, portion of the loan payment formula uses
  the original loan amount. The original loan amount is essentially the present value of the future payments on the loan, much
  like the present value of an annuity.`, `It is important to keep the rate per period and number of periods consistent with one
  another in the formula. If the loan payments are made monthly, then the rate per period needs to be adjusted to the monthly
  rate and the number of periods would be the number of months on the loan. If payments are quarterly, the terms of the loan
  payment formula would be adjusted accordingly.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
