import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const FreeCashFlowToEquityDef: FormulaDefination = {

  id: 1,
  title: 'Free Cash Flow to Equity',
  subtitle: 'Free Cash Flow to Equity',
  defination: [`The formula for free cash flow to equity is net income minus capital expenditures minus change in working
  capital plus net borrowing.`, `The free cash flow to equity formula is used to calculate the equity available to
  shareholders after accounting for the expenses to continue operations and future capital needs for growth.`, `Breakdown
  of FCFE Formula`, `Net Income is found on a firm's income statement and is the firm's earnings after expenses, including
  interest expenses and taxes. Net income may also be found on the cash flow statement which may save time considering
  other factors of the free cash flow to equity formula are on there as well. Net income may be referred to as "the
  bottom line".`, `A firm's prior capital expenditures can be found on its cash flow statement and represents capital
  used for long term or fixed assets.`, `A firm's working capital is current assets minus current liabilities. The term
  "current" implies that the assets and liabilities are liquid, generally representing less than one year, and used for
  short term operations. Current assets and current liabilities can be found on a firm's balance sheet.`, `Net borrowing
  is the difference between the amount a company borrows and what debt it repays. It is important to not include interest
  as this is already figured into net income (interest expense). Net borrowing can be found by comparing changes on a
  company's balance sheet.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
