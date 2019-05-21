import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PresentValueOfAnnuityDueDef: FormulaDefinition = {
  id: 1,
  title: 'Present Value of Annuity Due',
  subtitle: 'Present Value of Annuity Due',
  defination: [`The formula for the present value of an annuity due, sometimes referred
  to as an immediate annuity, is used to calculate a series of periodic payments, or cash
  flows, that start immediately.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
