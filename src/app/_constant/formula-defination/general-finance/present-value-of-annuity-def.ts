import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const PresentValueOfAnnuityDef: FormulaDefination = {
  id: 1,
  title: 'Present Value of Annuity',
  subtitle: 'Present Value of Annuity',
  defination: [`The present value of annuity formula determines the value of a series of
  future periodic payments at a given time. The present value of annuity formula relies on
  the concept of time value of money, in that one dollar present day is worth more than that
  same dollar at a future date.`, `Rate Per Period`, `As with any financial formula that
  involves a rate, it is important to make sure that the rate is consistent with the other
  variables in the formula. If the payment is per month, then the rate needs to be per month,
  and similarly, the rate would need to be the annual rate if the payment is annual.`, `An
  example would be an annuity that has a 12% annual rate and payments are made monthly.
  The monthly rate of 1% would need to be used in the formula.`, `Assumptions`, `The formula
  shown has assumptions, in that it must be an ordinary annuity. These assumptions are that `,
  `1) The periodic payment does not change`, `2) The rate does not change`, `3) The first
  payment is one period away`, `If the payment and/or rate changes, the calculation of the
  present value would need to be adjusted depending on the specifics. If the payment increases
  at a specific rate, the present value of a growing annuity formula would be used.`, `If
  the first payment is not one period away, as the 3rd assumption requires, the present value
  of annuity due or present value of deferred annuity may be used. An annuity due is an annuity
  that's initial payment is at the beginning of the annuity as opposed to one period away.
  A deferred annuity pays the initial payment at a later time.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
