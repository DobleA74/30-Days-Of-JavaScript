let firstName = 'Andres';
let lastName =  'Andriani';
let country = 'Argentina';
let city = 'Rosario';
let age = 31;
let isMarried = false;
let year = 2024;
console.log(typeof firstName);
console.log(typeof '10' == 10);
console.log(parseInt('9.8') == 10);

console.log(age >= 30);
console.log(isMarried == false);
console.log(city == 'Rosario');

console.log(age < 30);
console.log(year < 2021);
console.log(country == age);
const now = new Date ();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());

// let base = 20;
// let height = 10
// let area = (0.5 * base * height)
// console.log(area);

//1.

// let base = prompt('Enter number of base', 20);
// let height = prompt('enter number of height',10);
// let area = (0.5 * base * height);

// //2.

// let sideA = prompt('side A', '5');
// let sideB = prompt('side B', 4);
// let sideC = prompt('side C', 3);
// let perimeter = (sideA, sideB, sideC);

// //3.

// let length = prompt('length',);
// let width = prompt('width',);
// let areaPerimeter = (2 *(length + width));

// //4.

// let radio = prompt('radio', );
// let pi = 3.14
// let areaCircle = (pi * radio * radio);
// let circumference = (2 * pi * radio);

if (firstName.length > 7) {
    console.log('your name is long');
}else{
    console.log('your name is short');
}
