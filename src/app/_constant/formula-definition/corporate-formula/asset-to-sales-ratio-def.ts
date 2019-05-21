import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const AssetToSalesRatioDef: FormulaDefinition = {
  id: 1,
  title: 'Asset to Sales Ratio',
  subtitle: 'Asset to Sales Ratio',
  defination: [`The asset to sales ratio is calculated by dividing total assets by sales revenues. The asset to sales
  formula can be used to compare how much in assets a company has relative to the amount of revenues the company can
  generate using their assets. `, `The numerator of the assets to sales formula, total assets, is averaged over the
  time period that is being evaluated and can be found on a company's balance statement. The denominator, sales revenues,
  is found on a company's income statement. It is important to remember that the asset to sales ratio does not look at a
  company's net income, or profit. It only looks at sales which may or may not relate to a company's actual profit.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
