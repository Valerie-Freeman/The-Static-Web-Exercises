// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

//     A score of 50-60 is an F
//     A score of 61-70 is a D
//     A score of 71-80 is a C
//     A score of 81-90 is a B
//     A score of 91-100 is an A

// Use console.log() to output the following criteria:

//     How many of each grade?
//     What is the lowest grade?
//     What is the highest grade?

// Would like to find a way to wrap it up in a function so one could perform these actions on more than one array

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let f = 0,
    d = 0,
    c = 0,
    b = 0,
    a = 0;

let lowestGrade = 0;
let highestGrade = 0;

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] >= 50 && scores[i] <= 60 ) {
        f++;
    } else if (scores[i] >= 61 && scores[i] <= 70) {
        d++;
    } else if (scores[i] >= 71 && scores[i] <= 80) {
        c++;
    } else if (scores[i] >= 81 && scores[i] <= 90) {
        b++;
    } else if (scores[i] >= 91 && scores[i] <= 100) {
        a++;
    }
    
    if (lowestGrade == 0 || scores[i] < lowestGrade) {  //Weird, but it works, I figured it out on my own, and im happy.
        lowestGrade = scores[i];
    }
    if (scores[i] > highestGrade) {
        highestGrade = scores[i];
    }

}

console.log(scores);
console.log("Number of F's: ", f);
console.log("Number of D's: ", d);
console.log("Number of C's: ", c);
console.log("Number of B's: ", b);
console.log("Number of A's: ", a);
console.log("Lowest grade: ", lowestGrade);
console.log("Highest grade: ", highestGrade);