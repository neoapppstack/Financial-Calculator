import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const AnnualPercentageYieldDef: FormulaDefination = {
  id: 1,
  title: 'Annual Percentage Yield',
  subtitle: 'Annual Percentage Yield',
  defination: [`The Annual Percentage Yield (APY), referenced as the effective annual rate in finance, is the rate of interest
  that is earned when taking into consideration the effect of compounding.`, `There are various terms used when compounding
  is not considered including nominal interest rate, stated annual interest rate, and annual percentage rate(APR).`, `In the formula,
  the stated interest rate is shown as r. A bank may show this as simply "interest rate". The annual percentage yield formula
  would be applied to determine what the effective yield would be if the account was compounded given the stated rate. The n
  in the annual percentage yield formula would be the number of times that the financial institution compounds. For example,
  if a financial institution compounds the account monthly, n would equal 12. `],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
