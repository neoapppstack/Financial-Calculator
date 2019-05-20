import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const BidAskSpreadDef: FormulaDefination = {
  id: 1,
  title: 'Bid-Ask Spread',
  subtitle: 'Bid-Ask Spread',
  defination: [`The bid ask spread formula is the difference between the asking price and bid price of a particular investment.
  The bid ask spread may be used for various investments and is primarily used in investments that sell on an exchange.`, `Use of
  the Bid Ask Spread`, `The bid ask spread may be used to determine the liquidity of a particular investment. A higher trade volume,
  or higher liquidity, will generally lead to a lower bid-ask spread. One analogy could be comparing the difference in asking price
  and the offer price of a home or piece of art(not sold at an auction). These assets may take longer to sale and there may be less
  individuals looking to buy the individual's particular asset. On the other hand, stocks, commodity futures, currency exchanges and
  futures are often considered to be more liquid as many buyers and sellers trade on the market every day that the exchange is open.`
  , `The bid ask spread may also connote the costs involved with buying a particular investment when an intermediary holds and purchases
  the investment. For example, suppose that a specialist on an exchange will offer to sell and are also willing to purchase the same
  security. The gap between the price they're willing to sell at and the amount they will purchase the security for would be considered
  a profit for them and a theoretical cost for the other party.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
