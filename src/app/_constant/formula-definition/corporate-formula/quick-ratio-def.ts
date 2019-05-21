import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const QuickRatioDef: FormulaDefinition = {

  id: 1,
  title: 'Quick Ratio',
  subtitle: 'Quick Ratio',
  defination: [`The Quick Ratio is used for determining a company's ability to cover its short term debt with assets that
  can readily be transferred into cash, or quick assets. The Current Liabilities portion references liabilities that are
  payable within one year.`, `The Quick Ratio provides an idea of how solvent a company is without requiring sales to
  cover the short debt, which differentiates it from the current ratio.`, `Current Assets are assets that can be realized
  within one year. Inventory, which is included in the current ratio, is excluded in the quick ratio.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
