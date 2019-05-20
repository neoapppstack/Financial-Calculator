import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const CapitalAssetPricingModelDef: FormulaDefination = {
  id: 1,
  title: 'Capital Asset Pricing Model (CAPM)',
  subtitle: 'Capital Asset Pricing Model (CAPM)',
  defination: [`The capital asset pricing model provides a formula that calculates the expected return on a security based on its level
  of risk. The formula for the capital asset pricing model is the risk free rate plus beta times the difference of the return on the market
  and the risk free rate.`, `Risk and the Capital Asset Pricing Model Formula`, `To understand the capital asset pricing model, there must
  be an understanding of the risk on an investment. Individual securities carry a risk of depreciation which is a loss of investment to the
  investor. Some securities have more risk than others and with additional risk, an investor expects to realize a higher return on their
  investment. For example, assume that an individual has $100 and two acquaintances would like to borrow the $100 and both are offering a
  5% return($105) after 1 year. The obvious choice would be to lend to the individual who is more likely to pay, i.e., carries less risk
  of default. The same concept can be applied to the risk involved with securities.`, `The risk involved when evaluating a particular stock
  is accounted for in the capital asset pricing model formula with beta. Specifically regarding the capital asset pricing model formula,
  beta is the measure of risk involved with investing in a particular stock relative to the risk of the market. The beta of the market would
  be 1. An individual security with a beta of 1.5 would be as proportionally riskier than the market and inversely, a beta of .5 would have
  less risk than the market.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
