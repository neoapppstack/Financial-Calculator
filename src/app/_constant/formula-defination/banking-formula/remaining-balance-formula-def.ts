import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const RemainingBalanceFormulaDef: FormulaDefination = {
  id: 1,
  title: 'Remaining Balance on Loan',
  subtitle: 'Remaining Balance on Loan',
  defination: [`The formula for the remaining balance on a loan can be used to calculate the remaining balance at a given
  time(time n), whether at a future date or at present. The remaining balance on a loan formula shown is only used for a
  loan that is amortized, meaning that the portion of interest and principal applied to each payment is predetermined.`, `The
  term "future value" in the remaining balance formula may seem confusing, but the balance at any time after payments are being
  made is the future value in respect to the origination of the loan.`, `It is important, as with all financial formulas, that
  the interest rate per period and term relate to one another and to when the payments are made. With monthly payments, the rate
  would need to be the monthly rate and not the annual rate.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
