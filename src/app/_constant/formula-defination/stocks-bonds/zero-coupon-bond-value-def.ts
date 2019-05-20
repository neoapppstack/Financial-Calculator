import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const ZeroCouponBondValueDef: FormulaDefination = {
  id: 1,
  title: 'Zero Coupon Bond Value',
  subtitle: 'Zero Coupon Bond Value',
  defination: [`A zero coupon bond, sometimes referred to as a pure discount bond or simply discount bond, is a bond that does not pay
  coupon payments and instead pays one lump sum at maturity. The amount paid at maturity is called the face value. The term discount
  bond is used to reference how it is sold originally at a discount from its face value instead of standard pricing with periodic
  dividend payments as seen otherwise.`, `As shown in the formula, the value, and/or original price, of the zero coupon bond is discounted
  to present value. To find the zero coupon bond's value at its original price, the yield would be used in the formula. After the zero
  coupon bond is issued, the value may fluctuate as the current interest rates of the market may change.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
