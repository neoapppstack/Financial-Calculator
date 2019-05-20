import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const EstimatedEarningsDef: FormulaDefination = {
  id: 1,
  title: 'Estimated Earnings',
  subtitle: 'Estimated Earnings',
  defination: [`The formula for estimated earnings is forecasted sales minus forecasted expenses. The formula above is a simple way of
  restating how to calculate net income, i.e. earnings, based on its estimated components. However, the practice of calculating estimated
  earnings is far more complex.`, `It is important to note that the expenses in the estimated earnings formula should include interest
  and taxes.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
