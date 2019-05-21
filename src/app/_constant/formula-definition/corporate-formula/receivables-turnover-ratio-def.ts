import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const ReceivablesTurnoverRatioDef: FormulaDefinition = {

  id: 1,
  title: 'Receivables Turnover Ratio',
  subtitle: 'Receivables Turnover Ratio',
  defination: [`The receivables turnover ratio formula , sometimes referred to as accounts receivable turnover, is sales divided
  by the average of accounts receivables.`, `Sales revenue is the amount a company earns in sales or services from its primary
  operations. Sales revenue can be found on a company's income statement under sales revenue or operating revenue.`, `Average
  accounts receivable in the denominator of the formula is the average of a company's accounts receivable from its prior period
  to the current period. For example, if a company has $200,000 in accounts receivables at the end of one period and had $150,000
  of accounts receivables ending in the prior period, the average would be $175,000. Accounts receivables can be found on a company's
  balance sheet.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
