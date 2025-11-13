myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
// The bug is that javascript arrays start at zero when it comes to arrays.
for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// code that rejects input
// made a true and false if else, returns false because the number is not within 0-100
function myNumber(num) {
    if (typeof num !== 'num') {
        return false;
    }
    if (num >= 0 && num <= 100) {
        return true;
    } else {
        return false;
    }
}

console.log (myNumber(-5));

// 
