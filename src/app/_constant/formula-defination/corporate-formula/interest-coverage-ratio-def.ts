import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const InterestCoverageRatioDef: FormulaDefination = {

  id: 1,
  title: 'Interest Coverage Ratio',
  subtitle: 'Interest Coverage Ratio',
  defination: [`The formula for the interest coverage ratio is used to measure a company's earnings relative to the
  amount of interest that it pays. The interest coverage ratio is considered to be a financial leverage ratio in that
  it analyzes one aspect of a company's financial viability regarding its debt.`, `One consideration of the interest
  coverage ratio is that earnings can fluctuate more than interest expense. It is important to look at prior trends of
  a particular company as the interest coverage ratio does not consider future projected earnings. In addition, as with
  any financial formula, no one ratio or formula should be used in isolation.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
