
function calculateGrade(percentage) {
  // Validate the input
  if (typeof percentage !== "number" || isNaN(percentage)) {
    return "F";
  }

  // Round to the nearest integer
  percentage = Math.round(percentage);

  // Handle grading logic
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Prompt user for percentage input
const input = prompt("Enter Percentage.");
const percentage = parseFloat(input); // using parseFloat for decimal input
alert(calculateGrade(percentage));
