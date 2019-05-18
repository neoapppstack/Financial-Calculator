import { FormulaData } from '../_models/formula/formula-data';

export const FinancialMarketFormulaList: FormulaData[] = [
  {
    id: 1,
    name: 'Rate of Inflation',
    description: `The rate of inflation formula measures the percentage change in purchasing power
    of a particular currency. As the cost of prices increase, the purchasing power of the currency
    decreases.`,
    url: '/financial-markets/rate-of-inflation',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 2,
    name: 'Real Rate of Return',
    description: `The real rate of return formula is the sum of one plus the nominal rate divided
    by the sum of one plus the inflation rate which then is subtracted by one. The formula for
    the real rate of return can be used to determine the effective return on an investment after
    adjusting for inflation.`,
    url: '/financial-markets/real-rate-of-return',
    other: 'Other data',
    iconName: 'mdi-calculator'
  }
];
