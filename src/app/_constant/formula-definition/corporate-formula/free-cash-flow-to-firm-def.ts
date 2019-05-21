import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FreeCashFlowToFirmDef: FormulaDefinition = {

  id: 1,
  title: 'Free Cash Flow to Firm (FCFF)',
  subtitle: 'Free Cash Flow to Firm (FCFF)',
  defination: [`The free cash flow to firm formula is capital expenditures and change in working capital subtracted from the
  product of earnings before interest and taxes (EBIT) and one minus the tax rate(1-t).`, `The free cash flow to firm formula
  is used to calculate the amount available to debt and equity holders.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
