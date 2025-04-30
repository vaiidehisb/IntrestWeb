/*const amountInput = document.getElementById('amount');
const rateSelect = document.getElementById('rate');
const monthsSelect = document.getElementById('months');
const interestDisplay = document.getElementById('interest');
const totalDisplay = document.getElementById('total');

function calculateInterest() {
  const principal = parseFloat(amountInput.value) || 0;
  const annualRate = parseFloat(rateSelect.value) || 0;
  const months = parseInt(monthsSelect.value) || 0;

  const timeInYears = months / 12;
  const interest = (principal * annualRate * timeInYears) / 100;
  const total = principal + interest;

  interestDisplay.textContent = `₹ ${interest.toFixed(2)}`;
  totalDisplay.textContent = `₹ ${total.toFixed(2)}`;
}

// Attach events
amountInput.addEventListener('input', calculateInterest);
rateSelect.addEventListener('change', calculateInterest);
monthsSelect.addEventListener('change', calculateInterest);

// Initial calculation
calculateInterest();
*/
