import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const BondEquivalentYieldDef: FormulaDefination = {
  id: 1,
  title: 'Bond Equivalent Yield',
  subtitle: 'Bond Equivalent Yield',
  defination: [`The bond equivalent yield formula is used to determine the annual yield on a discount, or zero coupon, bond.
  When making investment decisions, comparing the yield or returns on the investment choices in relative terms is important.
  The return on a 6 month bond would obviously be less than on a 12 month bond, ceteris paribus. Likewise, the percentage of
  return would be less yet equally profitable when considering the length of investment. The bond equivalent yield formula can
  be used to compare these two investments with different maturities in relative terms.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
