// function to calculate Payee Tax

function calculatePayeeTax(grossSalary) {
    let payeeTax = 0;

    if (grossSalary <= 2400){
        payeeTax = 0;
    } else if (grossSalary <= 32333){
        payeeTax = (grossSalary - 24000) * 0.1;
    }else if (grossSalary <= 41083) {
        payeeTax = (grossSalary - 32333) * 0.15 + 833;
      } else if (grossSalary <= 49833) {
        payeeTax = (grossSalary - 41083) * 0.2 + 2499;
      } else if (grossSalary <= 68583) {
        payeeTax = (grossSalary - 49833) * 0.25 + 5624;
      } else if (grossSalary <= 87333) {
        payeeTax = (grossSalary - 68583) * 0.3 + 10279;
      } else if (grossSalary <= 115833) {
        payeeTax = (grossSalary - 87333) * 0.33 + 18058;
      } else {
        payeeTax = (grossSalary - 115833) * 0.35 + 28943;
      }
    return payeeTax;
}

// Function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
  let nhif = 0;

  if (grossSalary <= 5999) {
    nhif = 150;

  }else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  return nhif;
}

// Function to calculate NSSF deduction

function calculateNSSF(grossSalary) {

  let nssf = Math.min(grossSalary * 0.06, 2400);
  return nssf;
}

// Function to calculate net salary

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payeeTax = calculatePayeeTax(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);

  const deductions = payeeTax + nhif + nssf;
  const netSalary = grossSalary - deductions;

  return netSalary;
}

const basicSalary = 40000;
const benefits = 600000;

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", netSalary);