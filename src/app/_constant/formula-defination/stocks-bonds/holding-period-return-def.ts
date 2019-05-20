import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const HoldingPeriodReturnDef: FormulaDefination = {
  id: 1,
  title: 'Holding Period Return',
  subtitle: 'Holding Period Return',
  defination: [`The formula for the holding period return is used for calculating the return on an investment over multiple periods.`, `The
  returns on an investment may be shown on an annual, quarterly, or monthly basis. An individual may be tempted to incorrectly add the
  percentages of return to find the return over the multiple periods. By incorrectly adding the periodic returns, the effect of compounding
  is not taken into consideration. For example, a return of 10% the first year followed by a return of 10% the next year does not equate to
  an aggregate of 20%. By using the holding period return formula, the amount gained would be 21%. The extra 1% can be attributed to the
  effect of compounding through earning 10% in the second year on the 10% that was earned in the first year. This is sometimes called
  earning interest on interest.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
