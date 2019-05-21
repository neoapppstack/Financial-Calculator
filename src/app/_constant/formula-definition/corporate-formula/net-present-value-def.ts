import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const NetPresentValueDef: FormulaDefinition = {

  id: 1,
  title: 'Net Present Value',
  subtitle: 'Net Present Value',
  defination: [`Net Present Value(NPV) is a formula used to determine the present value of an investment by the discounted
  sum of all cash flows received from the project. `, `When a company or investor takes on a project or investment, it is
  important to calculate an estimate of how profitable the project or investment will be. In the formula, the -C0 is the
  initial investment, which is a negative cash flow showing that money is going out as opposed to coming in. Considering
  that the money going out is subtracted from the discounted sum of cash flows coming in, the net present value would need
  to be positive in order to be considered a valuable investment.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
