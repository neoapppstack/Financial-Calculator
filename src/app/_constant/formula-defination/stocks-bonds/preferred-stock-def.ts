import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const PreferredStockDef: FormulaDefination = {
  id: 1,
  title: 'Preferred Stock',
  subtitle: 'Preferred Stock',
  defination: [`The formula shown is for a simple straight preferred stock that does not have additional features, such as those found
  in convertible, retractable, and callable preferred stocks.`, `A preferred stock is a type of stock that provides dividends prior to
  any dividend paid to common stocks. Apart from having preference for dividend payouts, preferred stocks generally will have preference
  of asset allocation upon insolvency of the company, compared to common stocks. Because of these preferences, preferred stock is
  generally considered to be more secure than common stock and similar to a debt financial instrument, i.e., a bond. Despite the
  similarities, bonds do have preference for the same reasons and are generally considered more secure, ceteris paribus.`, `The formula
  for the present value of a preferred stock uses the perpetuity formula. A perpetuity is a type of annuity that pays periodic payments
  infinitely. As previously stated, preferred stocks in most circumstances receive their dividends prior to any dividends paid to common
  stocks and the dividends tend to be fixed. With this, its value can be calculated using the perpetuity formula.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
