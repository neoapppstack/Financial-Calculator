import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const DoublingTimeSimpleInterestDef: FormulaDefinition = {
  id: 1,
  title: 'Doubling Time - Simple Interest',
  subtitle: 'Doubling Time - Simple Interest',
  defination: [`The doubling time for simple interest is simply 1 divided by the periodic
  rate. The formula for doubling time with simple interest is used to calculate how long
  it would take to double the balance on an interesting bearing account that has simple
  interest.`, `Simple interest is interest earned based solely on the principle. In
  contrast, compound interest is interest earned on principle along with prior interest
  earned.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
