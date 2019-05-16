import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const RuleOfSeventyTwoDef: FormulaDefination = {
  id: 1,
  title: 'Rule of 72',
  subtitle: 'Rule of 72',
  defination: [`The Rule of 72 is a simple formula used to estimate the length of
  time required to double an investment. The rule of 72 is primarily used in off
  the cuff situations where an individual needs to make a quick calculation instead
  of working out the exact time it takes to double an investment. Also, one is more
  likely to remember the rule of 72 than the exact formula for doubling time or may
  not have access to a calculator that allows logarithms.`, `Example of Rule of 72`,
  `An individual is earning 6% on their money market account would like to estimate
  how long it would take to double their current balance. In order for this estimation
  to be remotely accurate, we must assume that there will be no withdrawals nor deposits
  into this account. We can estimate that it will take approximately 12 years to double
  the current balance after dividing 72 by 6.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
