import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FutureValueFactorDef: FormulaDefinition = {
  id: 1,
  title: 'Future Value Factor',
  subtitle: 'Future Value Factor',
  defination: [`The formula for the future value of a growing annuity is used to c
  alculate the future amount of a series of cash flows, or payments, that grow at a
  proportionate rate. A growing annuity may sometimes be referred to as an increasing
  annuity.`, `The future value factor formula is based on the concept of time value
  of money. The concept of time value of money is that an amount today is worth more
  than if that same nominal amount is received at a future date. Any amount received
  today can be invested and receive earnings, as opposed to waiting to receive the same
  amount with no earnings. An amount of $105 to be received a year from now may be okay
  if the individual wants $100 today, assuming that the individual can earn 5% otherwise
  in one year.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
