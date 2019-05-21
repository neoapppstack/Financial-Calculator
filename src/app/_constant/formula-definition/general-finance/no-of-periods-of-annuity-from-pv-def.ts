import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const NoOfPeriodsOfAnnuityFromPvDef: FormulaDefinition = {
  id: 1,
  title: 'Annuity (PV)- Solve for n',
  subtitle: 'Annuity (PV)- Solve for n',
  defination: [`The solve for n, or number of periods, formula shown above is used to
  determine the number of periods on an annuity using the present value, periodic payment,
  and periodic rate. An example of what the solve for n formula tries to answer is "How long
  will it take me to pay off a balance of $a at a rate of b% by making periodic payments of $c."`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
