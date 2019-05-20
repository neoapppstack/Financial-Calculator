import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const ZeroCouponBondEffectiveYieldDef: FormulaDefination = {
  id: 1,
  title: 'Zero Coupon Bond Effective Yield',
  subtitle: 'Zero Coupon Bond Effective Yield',
  defination: [`The zero coupon bond effective yield formula is used to calculate the periodic return for a zero coupon bond, or sometimes
  referred to as a discount bond.`, `A zero coupon bond is a bond that does not pay dividends (coupons) per period, but instead is sold
  at a discount from the face value. For example, an investor purchases one of these bonds at $500, which has a face value at maturity
  of $1,000. Although no coupons are paid periodically, the investor will receive the return upon sell assuming that the rates remain
  constant or upon maturity.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
