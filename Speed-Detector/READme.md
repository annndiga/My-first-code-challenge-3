## project Title
   # speed Detector

## project description

Aims at creating a speed detector program that takes the speed of a car as input and calculates the demerit points based on the speed.

## projest set up

The Conditions used are as follows ;
- const : 

//declares a constant variable 'speedLimit'

 const speedLimit = 70;

 //declares a constant variable "pointsPerDemerit'

 const pointsPerDemerit = 5;

 //declares a constant variable 'demeritLimit'

 const demeritLimit = 12;


 2) if.... 

 \*checks if the value of the 'speed' variable is less than or equal to the value of the 'speedlimit' variable .
  If condition is true , the speed is less than or equal to the speed limit.
  */

 if (speed <= speedLimit) {
        return "Ok";
    }

    3) switch condition

    // if condition is true ,the points are executed.

      case demeritPoints <= demeritLimit:
            return "Points:" + demeritPoints;

   // if condition is true , License suspended is executed

    case demeritPoints > demeritLimit:
            return "License Suspended";

    4)Output

//      The output in this case is '6 points'


//Thankyou for reading through!!!

