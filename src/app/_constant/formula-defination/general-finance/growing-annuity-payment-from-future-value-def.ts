import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const GrowingAnnuityPaymentFromFutureValueDef: FormulaDefination = {
  id: 1,
  title: 'Growing Annuity Payment - FV',
  subtitle: 'Growing Annuity Payment - FV',
  defination: [`The growing annuity payment formula using future value is used to
  calculate the first cash flow or payment of a series of cash flows that grow at
  a proportionate rate. A growing annuity may sometimes be referred to as an increasing
  annuity.`, `A few important things to note is that the growing annuity payment formula
  using future value shown calculates only the initial payment or cash flow. Each following c
  ash flow from the first must be calculated separately. This is discussed further in the
  latter sections.`, `Another important issue to consider is that the formula used here is
  specifically used when the future value of the growing annuity is known. Determining
  whether to use the growing annuity payment formula for future value or to use the growing
  annuity payment formula for present value depends on if the balance of the annuity is
  increasing or decreasing. This is explained more in the following section.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
