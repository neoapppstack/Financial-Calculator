import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const PresentValueOfGrowingAnnuityDef: FormulaDefination = {
  id: 1,
  title: 'Present Value of a Growing Annuity',
  subtitle: 'Present Value of a Growing Annuity',
  defination: [`
  The present value of a growing annuity formula calculates the present day value of a
  series of future periodic payments that grow at a proportionate rate. A growing annuity
  may sometimes be referred to as an increasing annuity. A simple example of a growing annuity
  would be an individual who receives $100 the first year and successive payments increase by
  10% per year for a total of three years. This would be a receipt of $100, $110, and $121,
  respectively.`, `The present value of a growing annuity formula relies on the concept of
  time value of money. The premise to this concept is that a specific quantity of money is
  worth more today than at a future time.`, `Like all financial formulas that involve a rate,
  it is important to correlate the rate per period to the number of periods in the present
  value of a growing annuity formula. If the payments are monthly, then the rate would need
  to be the monthly rate.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
