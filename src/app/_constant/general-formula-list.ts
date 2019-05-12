import { FormulaData } from '../_models/formula/formula-data';

export const GeneralFormulaList: FormulaData[] = [
  {
    id: 1,
    name: 'Annuity - Future Value',
    description: `The future value of an annuity formula is used to calculate what the value
    at a future date would be for a series of periodic payments.`,
    url: '/general-finance/future-value',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 2,
    name: 'Annuity - FV w/ CC',
    description: `The future value (FV) of an annuity with continuous compounding formula is
     used to calculate the ending balance on a series of periodic payments that are compounded
      continuously`,
    url: `/general-finance/future-value-of-annuity-continuous-compounding`,
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 3,
    name: 'Annuity (FV) - Solve for n',
    description: `The formula for solving for number of periods (n) on an annuity shown above is
    used to calculate the number of periods based on the future value, rate, and periodic cash flows.`,
    url: '/general-finance/number-of-periods-of-annuity-from-fv',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 4,
    name: 'Annuity - Payment (PV)',
    description: `The annuity payment formula is used to calculate the periodic payment on an annuity.
    An annuity is a series of periodic payments that are received at a future date. The present value
    portion of the formula is the initial payout, with an example being the original payout on an
    amortized loan.`,
    url: '/general-finance/annuity_payment_formula',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 5,
    name: 'Annuity - Payment (FV)',
    description: `The annuity payment formula shown above is used to calculate the cash flows of an
    annuity when future value is known. An annuity is denoted as a series of periodic payments.`,
    url: '/general-finance/annuity-payment-from-future-value',
    other: 'annuity-payment-from-future-value',
    iconName: 'mdi-calculator'
  },
  {
    id: 6,
    name: 'Annuity (PV) - Solve for n',
    description: `The solve for n, or number of periods, formula shown above is used to determine
    the number of periods on an annuity using the present value, periodic payment, and periodic rate.`,
    url: '/general-finance/number-of-periods-of-annuity-from-present-value',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 7,
    name: 'Annuity - Present Value',
    description: `The present value of annuity formula determines the value of a series of future periodic
    payments at a given time. The present value of annuity formula relies on the concept of time value of
    money, in that one dollar present day is worth more than that same dollar at a future date.`,
    url: '/general-finance/present_value_of_annuity',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 8,
    name: 'Average Collection Period',
    description: `The average collection period formula is the number of days in a period divided by the
    receivables turnover ratio.`,
    url: '/general-finance/average-collection-period',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 9,
    name: 'Annuity - PV Factor',
    description: `The present value annuity factor is used to calculate the present value of future one
    dollar cash flows`,
    url: '/general-finance/present-value-annuity-factor',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 10,
    name: 'Annuity Due - Present Value',
    description: `The formula for the present value of an annuity due, sometimes referred to as an immediate
    annuity, is used to calculate a series of periodic payments, or cash flows, that start immediately`,
    url: 'pages/general-finance/present_value_of_annuity_due',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 11,
    name: 'Annuity Due - Future Value',
    description: `The future value of annuity due formula is used to calculate the ending value of a series
    of payments or cash flows where the first payment is received immediately`,
    url: '/general-finance/future-value-of-annuity-due',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 12,
    name: 'Annuity Due Payment (FV)',
    description: 'This formula is specific to annuities where the initial cash flow is received immediately.',
    url: '/general-finance/annuity-due-payment-fv',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 13,
    name: 'Annuity Due Payment (PV)',
    description: 'This particular formula uses the present value of the cash flows to calculate the payment.',
    url: '/general-finance/annuity-due-payment-pv',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 14,
    name: 'Doubling Time',
    description: `The Doubling Time formula is used in Finance to calculate the length of time required to
    double an investment or money in an interest bearing account.`,
    url: '/general-finance/doubling-time',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 15,
    name: 'Doubling Time - Cont. Compounding',
    description: `The doubling time formula with continuous compounding is the natural log of 2 divided by
    the rate of return.`,
    url: '/general-finance/doubling-time-continuous-compounding',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 16,
    name: 'Doubling Time - Simple Interest',
    description: `The doubling time for simple interest is simply 1 divided by the periodic rate. The formula
    for doubling time with simple interest is used to calculate how long it would take to double the balance
    on an interesting bearing account that has simple interest.`,
    url: '/general-finance/doubling-time-simple-interest',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 17,
    name: 'Future Value',
    description: `Future Value (FV) is a formula used in finance to calculate the value of a cash flow at a
    later date than originally received. This idea that an amount today is worth a different amount than at
    a future time is based on the time value of money`,
    url: '/general-finance/future-value',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 18,
    name: 'FV - Continuous Compounding',
    description: `The future value with continuous compounding formula is used in calculating the later value
    of a current sum of money`,
    url: '/general-finance/future-value-continuous-compounding',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 19,
    name: 'Future Value Factor',
    description: `The formula for the future value factor is used to calculate the future value of an amount
    per dollar of its present value`,
    url: '/general-finance/future-value-factor',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 20,
    name: 'Growing Annuity - Future Value',
    description: `The formula for the future value of a growing annuity is used to calculate the future amount
    of a series of cash flows, or payments, that grow at a proportionate rate`,
    url: '/general-finance/future-value-of-growing-annuity',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 21,
    name: 'Growing Annuity - Payment (PV)',
    description: `The growing annuity payment from present value formula shown above is used to calculate the
    initial payment of a series of periodic payments that grow at a proportionate rate`,
    url: '/general-finance/growing-annuity-payment',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 22,
    name: 'Growing Annuity - Payment (FV)',
    description: `The growing annuity payment formula using future value is used to calculate the first cash
    flow or payment of a series of cash flows that grow at a proportionate rate`,
    url: '/general-finance/growing-annuity-payment-from-future-value',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 23,
    name: 'Growing Annuity - Present Value',
    description: `The present value of a growing annuity formula calculates the present day value of a
    series of future periodic payments that grow at a proportionate rate`,
    url: '/general-finance/present-value-of-growing-annuity',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 24,
    name: 'Growing Perpetuity - Present Value',
    description: `The present value of a growing perpetuity formula is the cash flow after the first period
    divided by the difference between the discount rate and the growth rate.`,
    url: '/general-finance/present-value-of-growing-perpetuity',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 25,
    name: 'Number of Periods - PV & FV',
    description: `The formula for solving for the number of periods shown at the top of this page is used to
    calculate the length of time required for a single cash flow(present value) to reach a certain
    amount(future value) based on the time value of money`,
    url: '/general-finance/solve-for-number-of-periods-pv-and-fv',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 26,
    name: 'Perpetuity',
    description: `A perpetuity is a type of annuity that receives an infinite amount of periodic payments.
    An annuity is a financial instrument that pays consistent periodic payments`,
    url: '/general-finance/perpetuity',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 27,
    name: 'Present Value',
    description: `Present Value (PV) is a formula used in Finance that calculates the present day value of
    an amount that is received at a future date`,
    url: '/general-finance/present_value',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 28,
    name: 'PV - Continuous Compounding',
    description: `The present value with continuous compounding formula is used to calculate the current value
    of a future amount that has earned at a continuously compounded rate`,
    url: '/general-finance/present-value-continuous-compounding',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 29,
    name: 'Present Value Factor',
    description: `The formula for the present value factor is used to calculate the present value per dollar
    that is received in the future.`,
    url: '/general-finance/present-value-factor',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 30,
    name: 'Rule of 72',
    description: `The Rule of 72 is a simple formula used to estimate the length of time required to double
    an investment`,
    url: '/general-finance/rule-of-72',
    other: 'Other data',
    iconName: 'mdi-calculator'
  },
  {
    id: 31,
    name: 'Weighted Average',
    description: `The weighted average formula is used to calculate the average value of a particular set of
    numbers with different levels of relevance`,
    url: '/general-finance/weighted_average',
    other: 'Other data',
    iconName: 'mdi-calculator'
  }
];
