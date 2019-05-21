import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const LoanToDepositRatioDef: FormulaDefinition = {
  id: 1,
  title: 'Loan to Deposit Ratio',
  subtitle: 'Loan to Deposit Ratio',
  defination: [`The formula for the loan to deposit ratio is exactly as its name implies, loans divided by deposits.`, `The loan
  to deposit ratio is used to calculate a lending institution's ability to cover withdrawals made by its customers. A lending
  institution that accepts deposits must have a certain measure of liquidity to maintain its normal daily operations. Loans given
  to its customers are mostly not considered liquid meaning that they are investments over a longer period of time. Although a
  bank will keep a certain level of mandatory reserves, they may also choose to keep a percentage of their non-lending investing
  in short term securities to ensure that any monies needed can be accessed in the short term.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
