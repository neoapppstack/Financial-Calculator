import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PaybackPeriodDef: FormulaDefinition = {

  id: 1,
  title: 'Payback Period',
  subtitle: 'Payback Period',
  defination: [`The payback period formula is used to determine the length of time it will take to recoup the initial amount
  invested on a project or investment. The payback period formula is used for quick calculations and is generally not considered
  an end-all for evaluating whether to invest in a particular situation.`, `The result of the payback period formula will match
  how often the cash flows are received. An example would be an initial outflow of $5,000 with $1,000 cash inflows per month.
  This would result in a 5 month payback period. If the cash inflows were paid annually, then the result would be 5 years.`, `At
  times, the cash flows will not be equal to one another. If $10,000 is the initial investment and the cash flows are $1,000 at
  year one, $6,000 at year two, $3,000 at year three, and $5,000 at year four, the payback period would be three years as the
  first three years are equal to the initial outflow.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
