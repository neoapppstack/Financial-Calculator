import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const AverageCollectionPeriodDef: FormulaDefinition = {
  id: 1,
  title: 'Average Collection Period',
  subtitle: 'Average Collection Period',
  defination: [`The average collection period formula is the number of days in a period
  divided by the receivables turnover ratio.`, `The numerator of the average collection
  period formula shown at the top of the page is 365 days. For many situations, an annual
  review of the average collection period is considered. However, if the receivables turnover
  is evaluated for a different time period, then the numerator should reflect this same time
  period.`, `For example, if the receivables turnover for one year is 8, then the average
  collection period would be 45.63 days. If the period considered is instead for 180 days
  with a receivables turnover of 4.29, then the average collection period would be 41.96 days.
  By the nature of the formula, a company will have a lower receivables turnover when a shorter
  time period is considered due to having a larger portion of its revenues awaiting receipt in
  the short run.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
