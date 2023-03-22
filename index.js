//code challenge 1
function checkGrade(marks) {
  const output = document.getElementById("grades");

  if (marks >= 80 && marks <= 100) {
    console.log("Grade: A");
    output.value = "Grade A";
  } else if (marks >= 60 && marks <= 79) { 
    console.log("Grade: B");
    output.value = "Grade B";
  } else if (marks >= 50 && marks <= 59) {
    console.log("Grade: C");
    output.value = "Grade C";
  } else if (marks >= 40 && marks <= 49) {
    console.log("Grade: D");
    output.value = "Grade D";
  } else if (marks < 40 && marks >= 0) {
    console.log("Grade: E");
    output.value = "Grade E";
  } else {
    console.log("Invalid input! Please enter marks between 0 and 100.");
  }
}
//button functionality
function buttonClicked() {
  const value = document.getElementById("marks").value;
  console.log(value);
  checkGrade(value);
}
//code challenge 2

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerDemerit = 5;
  const demeritLimit = 12;
  const output = document.getElementById("speedOutput");

  if (speed <= speedLimit) {
    console.log("Ok");
    output.value = "Ok";
  }else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
      console.log("License suspended");
      output.value = "License suspended";
    } else {
      console.log(`Points: ${demeritPoints}`);
      output.value = `Points: ${demeritPoints}`;
    }
  }
}
checkSpeed(70)

//button functionality

  function speedButtonClicked() {
  const value = document.getElementById("speed").value;
  console.log(value);
  checkSpeed(value);
}

// challenge 3

function findNetSalary(tPay) {
  let taxableIncome = tPay - 2400; // remove personal relief of 2400 per month
  let paye = 0;           // initialize PAYE to 0
  let nssf = tPay * 0.06;         // NSSSF is 6% of the tPay
  let nhif = 0;           // initialize NHIF to 0
  // calculate PAYE based on taxable income
  if (taxableIncome <= 24000) {
      paye = taxableIncome * 0.1
  } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
      paye = taxableIncome * 0.25
  } else if (taxableIncome > 32333) {
      paye = taxableIncome * 0.3
  }
  // calculate NHIF based on TPay
  if (tPay <= 5999) {
      nhif = 150
  } else if (tPay <= 7999) {
      nhif = 300
  } else if (tPay <= 11999) {
      nhif = 400
  } else if (tPay <= 14999) {
      nhif = 500
  } else if (tPay <= 19999) {
      nhif = 600
  } else if (tPay <= 24999) {
      nhif = 750
  } else if (tPay <= 29999) {
      nhif = 850
  } else if (tPay <= 34999) {
      nhif = 900
  } else if (tPay <= 39999) {
      nhif = 950
  } else if (tPay <= 44999) {
      nhif = 1000
  } else if (tPay <= 49999) {
      nhif = 1100
  } else if (tPay <= 59999) {
      nhif = 1200
  } else if (tPay <= 69999) {
      nhif = 1300
  } else if (tPay <= 79999) {
      nhif = 1400
  } else if (tPay <= 89999) {
      nhif = 1500
  } else if (tPay <= 99999) {
      nhif = 1600
  } else if (tPay > 100000) {
      nhif = 1700
  }
  // calculate netPay
  let netPay = tPay - paye - nssf - nhif;
  return netPay
}


finalOutput = findNetSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
//button functionality

  function findNetSalary() {
  const value = document.getElementById("gross-salary").value;
  console.log(value);
  findNetSalary(value);
  }