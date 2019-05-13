import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const FutureValueOfAnnuityDef: FormulaDefination = {
  id: 1,
  title: 'Future Value of Annuity',
  subtitle: 'Future Value of Annuity',
  defination: [`The future value of an annuity formula is used to calculate what the
    value at a future date would be for a series of periodic payments.`,
    `The future value of an annuity formula assumes that`,
    `1. The rate does not change`,
    `2. The first payment is one period away`,
    `3. The periodic payment does not change`,
    `If the rate or periodic payment does change, then the sum of the future value of
     each individual cash flow would need to be calculated to determine the future value
     of the annuity. If the first cash flow, or payment, is made immediately, the future
     value of annuity due formula would be used.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
