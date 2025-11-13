myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
// The bug is that javascript arrays start at zero when it comes to arrays.
for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

