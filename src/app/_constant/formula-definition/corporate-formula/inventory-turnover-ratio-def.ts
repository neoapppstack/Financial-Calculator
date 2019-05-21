import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const InventoryTurnoverRatioDef: FormulaDefinition = {

  id: 1,
  title: 'Inventory Turnover Ratio',
  subtitle: 'Inventory Turnover Ratio',
  defination: [`The formula for the inventory turnover ratio measures how well a company is turning their inventory into sales.
  The costs associated with retaining excess inventory and not producing sales can be burdensome. If the inventory turnover ratio
  is too low, a company may look at their inventory to appropriate cost cutting.`, `The denominator of the formula, inventory,
  is an average inventory for the period being analyzed. If monthly sales are used in the numerator of the formula, then the
  monthly average of inventory should be used.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
