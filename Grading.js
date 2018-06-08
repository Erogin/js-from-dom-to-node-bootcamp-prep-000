var number = [67, 86, 87, 78, 72, 73, 74];

//If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.

function gradingStudents(grades){
  var diff = new Array(grades.length);

  for(let i = 0; i < grades.length; i++){
    grades[i] = (Math.round(grades[i]/5)*5) - grades[i];
  //  if(diff[i] = 1, 2){
    //  grades[i] = Math.round(grades[i]/5)*5;
  //  }

  //  grades[i] = (Math.round(grades[i]/5)*5) - 5;

  }

  return grades;
}

console.log(gradingStudents(number));
