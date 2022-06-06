window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const amountInput = document.getElementById("loan-amount");
  const termInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");

  // Put some default values in the inputs
  amountInput.value = 50000;
  termInput.value = 5;
  rateInput.value = 6.99;

  // Call a function to calculate the current monthly payment
  update();
}

function update() {
  // Get the current values from the UI
  const loanValues = getCurrentUIValues();

  // Update the monthly payment
  const payment = calculateMonthlyPayment(loanValues);

  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // get variables
  const P = values.amount; // P = Amount of principle
  const i = values.rate / 100 / 12; // i = periodic interest rate
  const n = values.years * 12; // n = total number of payments

  // equation
  let monthlyPayment;
  if (i !== 0) {
    monthlyPayment = (P * i) / (1 - Math.pow(1 + i, -n));
  } else {
    monthlyPayment = P / n;
  }

  // Convert into string
  if (isFinite(monthlyPayment)) {
    return `${monthlyPayment.toFixed(2)}`;
  } else {
    return undefined;
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(payment) {
  const monthlyPaymentSpan = document.getElementById("monthly-payment");

  if (isFinite(payment)) {
    monthlyPaymentSpan.innerText = `$${payment}`;
  } else {
    monthlyPaymentSpan.innerText = `Loan details are invalid.`;
  }
}
