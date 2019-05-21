import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DiscountedPaybackPeriodDef: FormulaDefination = {

  id: 1,
  title: 'Discounted Payback Period',
  subtitle: 'Discounted Payback Period',
  defination: [`The discounted payback period formula is used to calculate the length of time to recoup an investment based on the
  investment's discounted cash flows. By discounting each individual cash flow, the discounted payback period formula takes into
  consideration the time value of money.`, `The discounted payback period formula is used in capital budgeting to compare a project
  or projects against the cost of the investment. The simple payback period formula can be used as a quick measurement, however
  discounting each cash flow can provide a more accurate picture of the investment. As a simple example, suppose that an initial
  cost of a project is $5000 and each cash flow is $1,000 per year. The simple payback period formula would be 5 years, the initial
  investment divided by the cash flow each period. However, the discounted payback period would look at each of those $1,000 cash
  flows based on its present value. Assuming the rate is 10%, the present value of the first cash flow would be $909.09, which is
  $1,000 divided 1+r. Each individual cash flow would then be discounted to its present value until it is determined how long it
  would take to recoup the original $5,000.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
