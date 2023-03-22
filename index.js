const TAX_RATE = 0.25;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.12;

function calculateSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const taxDeduction = grossSalary * TAX_RATE;
  const nhifDeduction = grossSalary * NHIF_RATE;
  const nssfDeduction = grossSalary * NSSF_RATE;
  const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE (Tax): ${taxDeduction}`);
  console.log(`NHIF Deduction: ${nhifDeduction}`);
  console.log(`NSSF Deduction: ${nssfDeduction}`);
  console.log(`Net Salary: ${netSalary}`);
}