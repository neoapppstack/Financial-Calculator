import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const TaxEquivalentYieldDef: FormulaDefinition = {
  id: 1,
  title: 'Tax Equivalent Yield',
  subtitle: 'Tax Equivalent Yield',
  defination: [`The tax equivalent yield formula is used to compare the yield between a tax-free investment and an investment that
  is taxed. One of the most common examples of a tax-free investment is municipal bonds. Municipal bonds are generally issued by
  local governments to finance development in its local community.`, `Use of Tax Equivalent Yield Formula`, `Investors who pay higher
  taxes may want to consider investing in municipal bonds or equivalent investments. The higher tax bracket an individual is in, the
  more appealing a tax-free investment would become. The tax equivalent yield formula can be used to compare the yield on the tax-free
  investment vs. an investment that is taxed.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
