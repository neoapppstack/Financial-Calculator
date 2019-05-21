import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const LoanToValueRatioDef: FormulaDefinition = {
  id: 1,
  title: 'Loan to Value Ratio',
  subtitle: 'Loan to Value Ratio',
  defination: [`The formula for the loan to value ratio is the loan amount divided by the value of the collateral used for the loan.
  The formula for the loan to value ratio is most commonly referenced in auto loans and mortgages, but can be applied to any loan
  that is secured with collateral including boat loans, RV loans, and certain types of commercial loans.`, `The value of collateral
  in the denominator of the formula for the loan to value ratio can be found depending on what type of loan is involved. The value
  of collateral for mortgages, land, and commercial real estate is generally determined by an appraisal. Used car loans and other
  forms of used consumer loans are generally determined by the book value published by companies such as NADA and Kelley Blue Book.
  The MSRP, or manufacturer's suggested retail price, may be used with consumer loans that use a new product as collateral.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
