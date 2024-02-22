/*level 1*/
//1
let age = prompt("Enter yout age:");
// if (age > 18) {
//     console.log("You are old enough to drive");
// } else {
//     console.log(`You are left with ${(18-age)} year to drive`);
// }
let myAge = 31;
if (age > myAge) {
    console.log(`you are ${(age - myAge)} years older than me`);
} else if (age == myAge) {
    console.log(`we have the same age`);
} else {
    console.log(`you are ${(myAge - age)} years old younger than me`);
}

//2
let a = prompt("enter number A",);
console.log(a);
let b = prompt("enter number B",);
console.log(b);

if (a > b) {
    console.log(`a is greater than b`);
} else {
    console.log("a is less than b")
};

if ((a % 2) != 0) {
    console.log("A is an odd number");
} else {
    console.log("A is an even number");
}

//Level 2
//1
let alumnA = prompt("Give a grade to the following alumn;");
switch (true) {
    case (alumnA >= 80 && alumnA <= 100):
        console.log("A");
        break;
    case (alumnA >= 70 && alumnA <= 89):
        console.log("B");
        break;
    case (alumnA >= 60 && alumnA <= 69):
        console.log("C");
        break;
    case (alumnA >= 50 && alumnA <= 59):
        console.log("D");
        break;
    case (alumnA >= 0 && alumnA <= 49):
        console.log("F");
        break
    default:
        console.log('entered value was not a number between 0 and  100');
        break;
}
console.log(alumnA);

