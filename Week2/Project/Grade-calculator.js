"use strict";

function gradeCalculator(score) {
  var grade = "";
//calculate what grade corresponds with the percentage
  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
      break;
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    case score >= 50 && score < 60:
      grade = "E";
      break;
    case score >= 0 && score < 50:
      grade = "F";
      break;

    default:
      grade = "INVAILD SCORE";
  }
  return console.log (`You got a ${grade} (${score}%)!`);
}
//shows the result: the grade and the percentage
gradeCalculator(60)