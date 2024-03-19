const countriesNew = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = [
    'MongoDB',
    'Express',
    'React',
    'Node'
]
for (let i = 0; i < 11; i++) {
        console.log(i);
}
let w = 0;
while ((w<=10)) {
    console.log(w)
    w++;
}
let d = 0;
do{
    console.log(d);
    d++
}while (d <=10) { 
}
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
let r = 10;
while ((r >= 0)) {
    console.log(r)
    r--;
}

const newArr =[]

for (let i = 0; i < 7; i++) {
    newArr.push('#')
    console.log(newArr);
}

for (let i = 0; i <= 10; i++) {
   
   console.log(`${i} * ${i} = ${i*i}`); 
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i**2} ${i**3}`);;
}
for (let num = 0; num <= 100; num++) {
    if ( num % 2 == 0) {
        console.log(num);
    };   
}
for (let num2 = 0; num2 <= 100; num2++) {
    if ( num2 % 2 !== 0) {
        console.log(num2);
    }; 
}
for (let numP = 0; numP <= 100; numP++) {
    if ( numP % 2 == 1 &&
         numP % numP == 0) {
        console.log(numP);
    }; 
}
total = 0
for (let sum = 0; sum <= 100; sum++) {
    total += sum
    console.log(total);
}
totalEvens = 0;
totalOdds = 0;
for (let suma = 0; suma <= 100; suma++) {
    if (suma % 2 ==0) {
        totalEvens += suma;
    }else{
        totalOdds +=suma;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${totalEvens}. 
And the sum of all odds from 0 to 100 is ${totalOdds}.`);