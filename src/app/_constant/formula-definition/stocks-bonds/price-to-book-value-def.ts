import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PriceToBookValueDef: FormulaDefinition = {
  id: 1,
  title: 'Price to Book Value',
  subtitle: 'Price to Book Value',
  defination: [`The Price to Book Ratio formula, sometimes referred to as the market to book ratio, is used to compare a company's net
   assets available to common shareholders relative to the sale price of its stock. The formula for price to book value is the stock
   price per share divided by the book value per share.`, `The stock price per share can be found as the amount listed as such through
   the secondary stock market.`, `The book value per share is considered to be the total equity for common stockholders which can be
   found on a company's balance sheet.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
