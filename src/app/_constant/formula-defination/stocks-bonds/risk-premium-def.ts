import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const RiskPremiumDef: FormulaDefination = {
  id: 1,
  title: 'Risk Premium',
  subtitle: 'Risk Premium',
  defination: [`The formula for risk premium, sometimes referred to as default risk premium, is the return on an investment minus the
  return that would be earned on a risk free investment. The risk premium is the amount that an investor would like to earn for the
  risk involved with a particular investment.`, `The US treasury bill (T-bill) is generally used as the risk free rate for calculations
  in the US, however in finance theory the risk free rate is any investment that involves no risk.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
