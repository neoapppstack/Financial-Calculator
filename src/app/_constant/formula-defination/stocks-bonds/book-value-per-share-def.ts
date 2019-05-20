import { FormulaDefination } from './../../../_models/formula/formula-defination';

export const BookValuePerShareDef: FormulaDefination = {
  id: 1,
  title: 'Book Value per Share',
  subtitle: 'Book Value per Share',
  defination: [`The book value per share formula is used to calculate the per share value of a company based on its equity available
  to common shareholders. The term "book value" is a company's assets minus its liabilities and is sometimes referred to as stockholder's
  equity, owner's equity, shareholder's equity, or simply equity.`, `Common stockholder's equity, or owner's equity, can be found on the
  balance sheet for the company. In the absense of preferred shares, the total stockholder's equity is used.`, `Concept of Book Value per
  Share`, `Book value per share is just one of the methods for comparison in valuing of a company. Enterprise value, or firm value, market
  value, market capitalization, and other methods may be used in different circumstances or compared to one another for contrast. For
  example, enterprise value would look at the market value of the company's equity plus its debt, whereas book value per share only looks
  at the equity on the balance sheet. Conceptually, book value per share is similar to net worth, meaning it is assets minus debt, and
  may be looked at as though what would occur if operations were to cease. One must consider that the balance sheet may not reflect with
  certain accuracy, what would actually occur if a company did sell all of their assets.`],

  formula: ` = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]`,

  formulaRef: ['P = Periodic Payment', 'r = rate per period', 'n = number of periods'],
  tags: ['General Finance', 'Future Value of Annuity'],
};
