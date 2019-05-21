import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FutureValueOfGrowingAnnuityDef: FormulaDefinition = {
  id: 1,
  title: 'Future Value of Growing Annuity',
  subtitle: 'Future Value of Growing Annuity',
  defination: [`The formula for the future value of a growing annuity is used to c
  alculate the future amount of a series of cash flows, or payments, that grow at a
  proportionate rate. A growing annuity may sometimes be referred to as an increasing
  annuity.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
