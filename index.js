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