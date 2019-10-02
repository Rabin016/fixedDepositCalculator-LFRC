document.getElementById('calculateForm').addEventListener('submit', calculate);

function calculate(e) {
    const primaryAmount = document.getElementById('loanAmount');
    const interestRate = document.getElementById('annualInterest');
    const yr = document.getElementById('repaymentYr');
    const monthlyPay = document.getElementById('monthlyResult');
    const totalPay = document.getElementById('totalPay');
    const totalInterest = document.getElementById('totalInterest');


    e.preventDefault();
}