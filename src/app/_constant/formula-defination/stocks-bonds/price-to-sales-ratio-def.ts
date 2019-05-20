import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const PriceToSalesRatioDef: FormulaDefination = {
  id: 1,
  title: 'Price to Sales Ratio',
  subtitle: 'Price to Sales Ratio',
  defination: [`The formula for price to sales ratio, sometimes referenced as the P/S Ratio, is the perceived value of a stock by the
  market compared to the revenues of the company. The price to sales ratio is calculated by dividing the stock price by sales per share.
  Sales per share uses the weighted average of shares for the time period evaluated, which is generally one year.`, `Revenues and sales
  are synonymous terms and can be found on a company's income statement. The price of the stock is the price listed on the stock exchange,
  or secondary market.`, `Use of P/S Ratio Formula`, `The price to sales formula can be used in lieu of the price to earnings ratio in
  situations where the company has a net loss. Also, some may give more relevance to the price to sales than the P/E ratio due to earnings
  can be manipulated based on accounting practices. However, it is important when evaluating an investment to look at all aspects of a
  company. Evaluating the changes of a company with multiple formulas at once may shed light on issues that may not be found by looking
  at each formula individually.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
