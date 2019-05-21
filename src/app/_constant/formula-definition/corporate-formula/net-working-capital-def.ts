import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const NetWorkingCapitalDef: FormulaDefinition = {

  id: 1,
  title: 'Net Working Capital',
  subtitle: 'Net Working Capital',
  defination: [`The formula for net working capital (NWC), sometimes referred to as simply working capital, is used to
  determine the availability of a company's liquid assets by subtracting its current liabilities.`, `Current Assets are
  the assets that are available within 12 months. Current Liabilities are the liabilities that are due within 12 months.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
