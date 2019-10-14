document.getElementById('calculateForm').addEventListener('submit', calculate);

function calculate(e) {
    const primaryAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('annualInterest').value);
    const yr = parseFloat(document.getElementById('repaymentYr').value);
    const monthlyPay = document.getElementById('monthlyResult');
    const totalPay = document.getElementById('totalPay');
    const totalInterest = document.getElementById('totalInterest');

    const calTotalInt = (interestRate * primaryAmount * yr) / (100);
    const calTotalPay = primaryAmount + calTotalInt;
    const calMonPay = calTotalPay / (yr * 12);

    if (isFinite(calMonPay)) {
        document.querySelector('section').style = "display:none";
        const loader = document.querySelector('.loader');
        loader.style = "display:block";
        setTimeout(function () {
            loader.style = "display:none";
            document.querySelector('section').style = "display:block";
        }, 1000);

        monthlyPay.value = calMonPay.toFixed(2);
        totalPay.value = calTotalPay.toFixed(2);
        totalInterest.value = calTotalInt.toFixed(2);
    } else {
        showError();
    }
    e.preventDefault();
}

function showError() {
    document.querySelector('section').style = "display:none";
    const errorDiv = document.querySelector('#error');
    errorDiv.innerHTML = `<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 text-sm font-semibold" role="alert"><p>Please input number correctly</p></div>`;
    setTimeout(function () {
        errorDiv.innerHTML = ``;
    }, 3000);
}
