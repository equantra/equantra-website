This is a new feature which is going to be added to the app. It is a financial freedom calculator. It will be a page that will have a form with the following fields:

- Total Monthly Expenses, Input type: number, default: 0
- Monthly Income, Input type: number, default: 0
- Monthly Savings, Input type: number, default: 0
- Inflation Rate, Input type: number, default: 7.5% (average inflation rate in india)
- Expected Increment in Income, Input type: number, default: 10%
- Current Age, Input type: number, default: 0
- Expected Return on Investment, Input type: dropdown, with options: aggressive, moderate, conservative
  - aggressive: 12% (stock market)
  - moderate: 9% (mutual funds)
  - conservative: 6% (fixed deposits)
- Expected Social Security Income, Input type: number, default: 0
- Expected Pension Income, Input type: number, default: 0
- Expected Inheritance, Input type: number, default: 0

After the form is submitted, the app will calculate the following:

- Equivalent Monthly expenses in future value (using inflation rate) (using formula: FV = PV * (1 + r)^n)
- Equivalent Monthly income in future value (using expected increment in income) (using formula: FV = PV * (1 + r)^n)










