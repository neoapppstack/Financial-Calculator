import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const NoOfPeriodsOfAnnuityFromFVComponentDef: FormulaDefination = {
  id: 1,
  title: 'Annuity (FV)- Solve for n',
  subtitle: 'Annuity (FV)- Solve for n',
  defination: [`The formula for solving for number of periods (n) on an annuity
  shown above is used to calculate the number of periods based on the future value,
  rate, and periodic cash flows.`, `The formula at the top of the page, solving for n,
  generally approaches the question "How long will it take to save $x amount dollars
  by saving $y per month at a rate of z%".`, `Example of Solve for n on Annuity
  Formula`, `Suppose that an individual receives an additional $1000 pay or bonus
  semiannually. Suppose this individual would like to find out how long until they
  save $19600 by saving $1,000 every half year at an effective rate of 5% every half
  year. **It is important to remember that the rate should match the frequency of the
  cash flows/payments. For example, if cash flows are semi-annual, then the effective
  semi-annual rate is used. The term effective implies that compounding is already
  adjusted for that period (see effective rate).`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
