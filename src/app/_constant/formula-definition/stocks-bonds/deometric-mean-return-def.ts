import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const DeometricMeanReturnDef: FormulaDefinition = {
  id: 1,
  title: 'Geometric Mean Return',
  subtitle: 'Geometric Mean Return',
  defination: [`The geometric mean return formula is used to calculate the average rate per period on an investment that is compounded
  over multiple periods. The geometric mean return may also be referred to as the geometric average return.`, `Use of the Geometric Mean
  Return Formula`, `The formula for the geometric mean return is used specifically for investments that are compounded. By contrast, a
  simple interest account would use the arithmetic average which is summing the rates and dividing by the number of periods.`, `The
  geometric mean return formula can also be used to break down the effective rate per period of the holding period return. The holding
  period return is the total return over multiple periods.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
