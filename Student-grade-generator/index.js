function getGrade(marks) {
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. ";
      }  else if  (marks > 79) {
        return "A";
      } else if (marks >= 60 && marks <= 79) {
        return "B";
     } else if (marks >= 49 && marks <= 59) {
        return "C";
     }else if (marks >= 40 && marks <= 49) {
        return "D";
     } else {
        return "E";
     }
    } 
    
    let marks = 30;
    let grade = getGrade(marks);
    
    console.log("Grade: " + grade); 