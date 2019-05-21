import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const LoanBalloonBalanceDef: FormulaDefination = {
  id: 1,
  title: 'Balloon Balance of a Loan',
  subtitle: 'Balloon Balance of a Loan',
  defination: [`The balloon loan balance formula is used to calculate the amount due at the end of a balloon loan.`, `A balloon loan,
  sometimes referred to as a balloon note, is a note that has a term that is shorter than its amortization. In other words, the loan
  payment will be amortized, or calculated, for a certain amount of years but the loan will be paid off before all payments calculated
  are made, thus leaving a balance due. An example would be a note that is calculated for 30 years, but the remaining balance after
  10 years must be paid in one full sum. This example is commonly referred to as a 10/30 balloon.`, `The loan balloon balance formula
  can be used for any type of balloon loan and is commonly seen with mortgages and leases.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
