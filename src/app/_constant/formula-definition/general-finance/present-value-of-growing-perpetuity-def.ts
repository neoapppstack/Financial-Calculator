import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PresentValueOfGrowingPerpetuityDef: FormulaDefinition = {
  id: 1,
  title: 'Present Value of Growing Perpetuity',
  subtitle: 'Present Value of Growing Perpetuity',
  defination: [`The present value of a growing perpetuity formula is the cash flow after
  the first period divided by the difference between the discount rate and the growth rate.`, `A
  growing perpetuity is a series of periodic payments that grow at a proportionate rate and
  are received for an infinite amount of time. An example of when the present value of a
  growing perpetuity formula may be used is commercial real estate. The rental cash flows
  could be considered indefinite and will grow over time.`, `It is important to note that
  the discount rate must be higher than the growth rate when using the present value of a
  growing perpetuity formula. This is due to the present value of a growing perpetuity
  formula being an infinite geometric series as explained in one of the following sections.
  In theory, if the growth rate is higher than the discount rate, the growing perpetuity
  would have an infinite value.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
