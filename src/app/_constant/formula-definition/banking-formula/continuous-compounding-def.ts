import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const ContinuousCompoundingDef: FormulaDefinition = {
  id: 1,
  title: 'Continuous Compounding',
  subtitle: 'Continuous Compounding',
  defination: [`The continuous compounding formula is used to determine the interest earned on an account that is constantly
  compounded, essentially leading to an infinite amount of compounding periods.`, `The effect of compounding is earning interest
  on an investment, or at times paying interest on a debt, that is reinvested to earn additional monies that would not have been
  gained based on the principal balance alone. By earning interest on prior interest, one can earn at an exponential rate.`, `The
  continuous compounding formula takes this effect of compounding to the furthest limit. Instead of compounding interest on an
  monthly, quarterly, or annual basis, continuous compounding will effectively reinvest gains perpetually.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
