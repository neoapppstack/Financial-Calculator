import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const ContributionMarginDef: FormulaDefination = {

  id: 1,
  title: 'Contribution Margin',
  subtitle: 'Contribution Margin',
  defination: [`The formula for contribution margin is the sales price of a product minus its variable costs. In other words, calculating
  the contribution margin determines the sales amount left over after adjusting for the variable costs of selling additional
  products.` , `To better understand contribution margin, consider that the net income of a company is its revenues minus expenses.
  The term revenues is synonymous with sales, and expenses include fixed costs and variable costs. Fixed costs are expenses that
  typically do not change and are not heavily influenced by the quantity of products sold. Land and equipment are examples of fixed
  costs.`, `On the other hand, variable costs are more tied to the development of the product and is greatly affected by the number
  of products sold. Examples of variable costs are labor and materials.`, `The contribution margin helps to easily calculate the amount
  of revenues left over to cover fixed costs and earn profit. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
