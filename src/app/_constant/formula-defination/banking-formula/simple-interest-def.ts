import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const SimpleInterestDef: FormulaDefination = {
  id: 1,
  title: 'Simple Interest',
  subtitle: 'Simple Interest',
  defination: [`The simple interest formula is used to calculate the interest accrued on a loan or savings account that
  has simple interest. The simple interest formula is fairly simple to compute and to remember as principal times rate
  times time. An example of a simple interest calculation would be a 3 year saving account at a 10% rate with an original
  balance of $1000. By inputting these variables into the formula, $1000 times 10% times 3 years would be $300.`, `Simple
  interest is money earned or paid that does not have compounding. Compounding is the effect of earning interest on the
  interest that was previously earned. As shown in the previous example, no amount was earned on the interest that was
  earned in prior years.`, `As with any financial formula, it is important that rate and time are appropriately measured
  in relation to one another. If the time is in months, then the rate would need to be the monthly rate and not the annual
  rate.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
