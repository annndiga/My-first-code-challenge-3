 ## student grade generator

 # project descri#ption

*The project aims at determining the grade of a student based on their marks.



# project set up 

*The student Grade Generator code provided defines a function that takes assigned values and the return /output corresponds with the grade basing on the provided marks.

*There are several conditions used;
- isNaN : checks whether the marks is not a number , less than 0, or greater than 100. If true , it indicates that the input is invalid, and the output is "Invalid output"
 \*
  //Ensure input is a valid Number between 0 and 100
if (isNaN(marks) || marks < 0 || marks > 100)
 */

- if...statement : checks if a single condition and execute code if the condition is true
-  the if ...is used to check if the marks input in invalid. If the condition is true, the program returns the message "Invalid input"
*/
  //Ensure input is a valid Number between 0 and 100
if (isNaN(marks) || marks < 0 || marks > 100)
*/

- else if... : checks for  additional conditions if the previous conditions were not fully determined.
- Used in this project to check the  grading criteria. It can assign the appropriate grade.
\*
 else if  (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
 } else if (marks >= 49 && marks <= 59) {
    return "C";
 }else if (marks >= 40 && marks <= 49)
*/

- else... : in the grading generator, its the last condition to check marks that dont satisfy the previous conditions.
 \*
 else {
    return "E";
    }
*/

*The code uses 'console.log'  to output the grade.
*The let declares the variables .
\*
let marks = 30;
let grade = getGrade(marks);

console.log("Grade: " + grade);