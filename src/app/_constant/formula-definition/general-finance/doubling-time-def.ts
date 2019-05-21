import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const DoublingTimeDef: FormulaDefinition = {
  id: 1,
  title: 'Doubling Time',
  subtitle: 'Doubling Time',
  defination: [`The Doubling Time formula is used in Finance to calculate the length of time
  required to double an investment or money in an interest bearing account.`, `It is important
  to note that r in the doubling time formula is the rate per period. If one wishes to calculate
  the amount of time to double their money in a money market account that is compounded monthly,
  then r needs to express the monthly rate and not the annual rate. The monthly rate can be found
  by dividing the annual rate by 12. With this situation, the doubling time formula will give the
  number of months that it takes to double money and not years.`, `In addition to expressing r as
  the monthly rate if the account is compounded monthly, one could also use the effective annual
  rate, or annual percentage yield, as r in the doubling time formula.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
