import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const DaysInInventoryDef: FormulaDefination = {

  id: 1,
  title: 'Days in Inventory',
  subtitle: 'Days in Inventory',
  defination: [`The formula to calculate days in inventory is the number of days in the period divided by the inventory turnover
  ratio. This formula is used to determine how quickly a company is converting their inventory into sales. A slower turnaround
  on sales may be a warning sign that there are problems internally, such as brand image or the product, or externally, such as
  an industry downturn or the overall economy.` , `The numerator of the days in inventory formula is shown at the top of this page
  as 365 to denote 365 days in a year. However, it is important to match the period in the numerator with the period for the
  inventory turnover used. For example, suppose that a company is calculating the days in inventory held based on a inventory
  turnover of 4.32 for one year. This can be divided into 365 days of the year for an average days in inventory of 84.49. If
  the same company has an inventory turnover of 2.31 for 180 days, the average days in inventory would be 77.92.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
