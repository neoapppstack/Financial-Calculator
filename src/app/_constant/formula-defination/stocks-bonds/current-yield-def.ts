import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const CurrentYielddDef: FormulaDefination = {
  id: 1,
  title: 'Current Yield',
  subtitle: 'Current Yield',
  defination: [`Current yield is a bond's annual return based on its annual coupon payments and current price (as opposed to its
    original price or face). The formula for current yield is a bond's annual coupons divided by its current price.`, `Use of the
    Current Yield Formula`, `The current yield formula is used to determine the yield on a bond based on its current price. The
    current yield formula can be used along with the bond yield formula, yield to maturity, yield to call, and other bond yield
    formulas to compare the returns of various bonds.`, `The current yield formula may also be used with risk ratings and calculations
    to compare various bonds. As a general rule in financial theory, one would expect a higher premium, or return, for a riskier
    investment. If two bonds are held constant in respect to their risk, a higher return would be preferable.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
