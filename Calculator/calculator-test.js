describe("calculateMonthlyPayment", () => {
  it("should return a string", () => {
    const values = { amount: 10000, years: 1, rate: 1 };
    const payment = calculateMonthlyPayment(values);
    expect(typeof payment).toBe("string");
  });

  it("should calculate the monthly rate correctly", () => {
    const values = { amount: 10000, years: 1, rate: 1 };
    expect(calculateMonthlyPayment(values)).toEqual("837.85");
  });

  it("should handle large amounts", () => {
    const values = { amount: 10000000, years: 10, rate: 4 };
    expect(calculateMonthlyPayment(values)).toEqual("101245.14");
  });

  it("should handle durations less than a year", () => {
    const values = { amount: 12000, years: 0.083333333333, rate: 0.01 };
    expect(calculateMonthlyPayment(values)).toEqual("12000.10");
  });

  it("should return a result with 2 decimal places", () => {
    const values = { amount: 1000, years: 1, rate: 1.47 };
    expect(calculateMonthlyPayment(values)).toBe("84.00");
  });

  it("should handle really high interest rates", () => {
    const values = { amount: 14000, years: 15, rate: 99.99 };
    expect(calculateMonthlyPayment(values)).toEqual("1166.55");
  });

  it("should handle no interest rate", () => {
    const values = { amount: 12000, years: 1, rate: 0 };
    expect(calculateMonthlyPayment(values)).toEqual("1000.00");
  });

  it("should return undefined when no year is specified", () => {
    const values = { amount: 15000, years: 0, rate: 2 };
    expect(calculateMonthlyPayment(values)).toBeUndefined();
  });

  it("should return zero when no amount is specified", () => {
    const values = { amount: 0, years: 10, rate: 2 };
    expect(calculateMonthlyPayment(values)).toEqual("0.00");
  });
});

/// etc
