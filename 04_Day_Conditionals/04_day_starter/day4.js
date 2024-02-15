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
    console.log(`you are ${(age-myAge)} years older than me`);
} else if( age == myAge) {
    console.log(`we have the same age`);   
}else{
    console.log(`you are ${(myAge-age)} years old younger than me`);
}