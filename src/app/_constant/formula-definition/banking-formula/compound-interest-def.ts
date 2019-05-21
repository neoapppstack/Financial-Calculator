import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const CompoundInterestDef: FormulaDefinition = {
  id: 1,
  title: 'Compound Interest',
  subtitle: 'Compound Interest',
  defination: [`The compound interest formula calculates the amount of interest earned on an account or investment where
  the amount earned is reinvested. By reinvesting the amount earned, an investment will earn money based on the effect
  of compounding.`, `Compounding is the concept that any amount earned on an investment can be reinvested to create additional
  earnings that would not be realized based on the original principal, or original balance, alone. The interest on the original
  balance alone would be called simple interest. The additional earnings plus simple interest would equal the total amount
  earned from compound interest.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
