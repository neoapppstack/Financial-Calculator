import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const EquivalentAnnualAnnuityDef: FormulaDefination = {

  id: 1,
  title: 'Equivalent Annual Annuity',
  subtitle: 'Equivalent Annual Annuity',
  defination: [`The equivalent annual annuity formula is used in capital budgeting to show the net present value of an investment
  as a series of equal cash flows for the length of the investment. The net present value(NPV) formula shows the present value of
  an investment that has uneven cash flows. When comparing two different investments using the net present value method, the length
  of the investment (n) is not taken into consideration. An investment with a 15 year term may show a higher NPV than an investment
  with a 4 year term. By showing the NPV as a series of cash flows, the equivalent annual annuity formula provides a way to factor
  in the length of an investment.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
