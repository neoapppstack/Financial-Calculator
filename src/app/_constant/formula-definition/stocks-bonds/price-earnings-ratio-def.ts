import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const PriceEarningsRatioDef: FormulaDefinition = {
  id: 1,
  title: 'Price to Earnings Ratio',
  subtitle: 'Price to Earnings Ratio',
  defination: [`The formula for the price to earnings ratio, also referred to as the P/E Ratio, is the price per share divided by
  earnings per share. The price to earnings ratio is used as a quick calculation for how a company's stock is perceived by the market
  to be worth relative to the company's earnings. A higher price to earnings ratio implies that the market values the stock as a better
  investment than if there was a lower price to earnings ratio, ceteris paribus. The increased perceived worth is due to news,
  speculation, or analysis from investors that the stock has a higher growth potential for the future.`, `The price to earnings ratio
  varies across different industries and also different countries. When comparing the price to earnings ratio among companies, it is
  important to compare within the same industry and country. Some industries are generally considered to have high growth expectations
  for the future as opposed to other industries that have a steady and established growth rate.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
