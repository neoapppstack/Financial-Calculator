import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const WeightedAverageDef: FormulaDefination = {
  id: 1,
  title: 'Weighted Average',
  subtitle: 'Weighted Average',
  defination: [`The weighted average formula is used to calculate the average value of
  a particular set of numbers with different levels of relevance. The relevance of each
  number is called its weight. The weights should be represented as a percentage of the
  total relevancy. Therefore, all weights should be equal to 100%, or 1.`, `The most common
  formula used to determine an average is the arithmetic mean formula. This formula adds
  all of the numbers and divides by the amount of numbers. An example would be the average
  of 1,2, and 3 would be the sum of 1 + 2 + 3 divided by 3, which would return 2. However,
  the weighted average formula looks at how relevant each number is. Say that 1 only happens
  10% of the time while 2 and 3 each happen 45% of the time. The percentages in this example
  would be the weights. The weighted average would be 2.35.`, `The weighted average formula
  is a general mathematical formula, but the following information will focus on how it
  applies to finance.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
