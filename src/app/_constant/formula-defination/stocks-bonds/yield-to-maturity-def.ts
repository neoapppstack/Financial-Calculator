import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const YieldToMaturityDef: FormulaDefination = {
  id: 1,
  title: 'Yield to Maturity',
  subtitle: 'Yield to Maturity',
  defination: [`The yield to maturity formula is used to calculate the yield on a bond based on its current price on the market.
  The yield to maturity formula looks at the effective yield of a bond based on compounding as opposed to the simple yield which
  is found using the dividend yield formula.`, `Notice that the formula shown is used to calculate the approximate yield to maturity.
  To calculate the actual yield to maturity requires trial and error by putting rates into the present value of a bond formula until
  P, or Price, matches the actual price of the bond. Some financial calculators and computer programs can be used to calculate the
  yield to maturity.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
