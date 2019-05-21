import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const DebtToIncomeRatioDef: FormulaDefinition = {
  id: 1,
  title: 'Debt to Income Ratio',
  subtitle: 'Debt to Income Ratio',
  defination: [`The formula for the debt to income ratio is the applicant's monthly debt payments divided by his or her gross
  monthly income. `, `The debt to income ratio is used in lending to calculate an applicant's ability to meet the payments on
  the new loan. The debt to income ratio may also be referred to as the back end ratio specifically when a new mortgage is
  requested. The term back end ratio, or total debt to income, is used to differentiate the calculation from the housing debt
  ratio, also called the front end ratio.`, `Whether it is bonds, stocks, or any other form of investment, measuring the
  ability of the individual or company to remain solvent is important. For a lending institution, loans are an investment
  which generally comprises a very large portion of their investment portfolio. For a financial institution, calculating
  the debt to income ratio is similar to a potential bondholder evaluating a company's debt load before deciding to invest.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
