import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const NetAssetValueDef: FormulaDefination = {
  id: 1,
  title: 'Net Asset Value',
  subtitle: 'Net Asset Value',
  defination: [`The net asset value formula is used to calculate a mutual fund's value per share. A mutual fund is a pool of investments
  that are divided into shares to be purchased by investors. Each share contains a weighted portion of each investment in the collective
  pool. The premise of grouping in this manner is to minimize risk by diversifying.`, `It is important to note that net asset value does
  not look at future dividends and growth as do other stock and bond valuation methods. The formula for net asset value only looks at
  the fund's per share value based on its net assets.`, `The net asset value is determined by the mutual fund company and priced according
  to this formula. Stock and bond valuation methods are not used due to mutual funds being sold directly from the company and not through
  an exchange or on the secondary market. Stocks, on the other hand, are sold through bid and ask pricing on the secondary market which
  requires an investor to determine a share's value to them based on expected future earnings, in which they bid accordingly.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
