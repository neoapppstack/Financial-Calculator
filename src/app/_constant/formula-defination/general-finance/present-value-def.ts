import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const PresentValueDef: FormulaDefination = {
  id: 1,
  title: 'Present Value',
  subtitle: 'Present Value',
  defination: [`Present Value (PV) is a formula used in Finance that calculates the
  present day value of an amount that is received at a future date. The premise of
  the equation is that there is "time value of money".`, `Time value of money is
  the concept that receiving something today is worth more than receiving the same
  item at a future date. The presumption is that it is preferable to receive $100
  today than it is to receive the same amount one year from today, but what if the
  choice is between $100 present day or $106 a year from today? A formula is needed
  to provide a quantifiable comparison between an amount today and an amount at a
  future time, in terms of its present day value.`, `Use of Present Value Formula`,
  `The Present Value formula has a broad range of uses and may be applied to various
  areas of finance including corporate finance, banking finance, and investment finance.
  Apart from the various areas of finance that present value analysis is used, the
  formula is also used as a component of other financial formulas.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
