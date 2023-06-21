//Program that takes input as the speed of a car.

//Declare the input value 

function calculateDemeritPoints(speed) {

    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const demeritLimit = 12;

    if (speed <= speedLimit) {
        return "Ok";
    }

//Calculate the demerit points by finding difference between speed then divide it by the points per demerit.

    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);

    //case when demeritPoints is less or equal to demeritLimit

    switch (true) {
        case demeritPoints <= demeritLimit:
            return "Points:" + demeritPoints;

    //case when demeritPoints is greater than demeritLimit
    
        case demeritPoints > demeritLimit:
            return "License Suspended";
           

    }
  }