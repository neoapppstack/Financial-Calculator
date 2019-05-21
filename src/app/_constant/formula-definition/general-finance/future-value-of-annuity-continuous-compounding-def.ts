import { FormulaDefinition } from '../../../_models/formula/formula-definition';

export const FutureValueOfAnnuityContinuousCompoundingDef: FormulaDefinition = {
  id: 1,
  title: 'FV of Annuity - Continuous Compounding',
  subtitle: 'FV of Annuity - Continuous Compounding',
  defination: [`The future value (FV) of an annuity with
   continuous compounding formula is used to calculate
   the ending balance on a series of periodic payments
   that are compounded continuously. Understanding the
   future value of annuity with continuous compounding
   formula requires the understanding of two specific
   financial and mathematical concepts, which are future
   value of an annuity and continuous compounding.`,

   `Future Value of Annuity, Continuous Compounding, and Geometric Series:`,

   `Future Value of Annuity - The future value of an annuity is the sum
    of a series of periodic payments and typically involves compounding
    of interest as the balance increases. The formula for future value
    of annuity alone generally solves the question "How much will I
    have saved at X dollars per month after Y months."`,

    `Continuous Compounding - Continuous compounding is compounding that
    is constant. One way some try to visualize the concept of continuous
    compounding is that is fluid, constantly compounding moment by moment,
    as opposed to daily, monthly, quarterly, or annually. The question a few
    sentences above regarding 'How much will I have saved' must also take into
   consideration how often interest is compounded in the interest bearing account`],

  formula: ``,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
