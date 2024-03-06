console.log(countries)
console.log(webTechs);
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[,.]/g, "");
console.log(words)
console.log(words.length)
let arrayWords = words.split(" ");
console.log(arrayWords);
console.log(arrayWords.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let addBeginning = shoppingCart.indexOf('Meat')
if (addBeginning === -1) {
    shoppingCart.unshift('Meat')
    console.log(shoppingCart);
} else {
    console.log(shoppingCart);
}
let addEnd = shoppingCart.indexOf('Sugar')
if ( addEnd === -1) {
    shoppingCart.push('Sugar')
    console.log(shoppingCart);
} else {
    console.log(shoppingCart);
}

let indexOfEthiopia = countries.indexOf('Ethiopia');
console.log(indexOfEthiopia);
if (indexOfEthiopia === -1) {
        countries.push('Ethiopia')
} else {
    console.log(countries[57].toUpperCase());
}
// const arr = Array();
// console.log(arr);

// const arr2 = Array(5).fill(0);
// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2[1]);

// const mixedDataTypes = ['ascaban', 'Dario',' ese', 'Leti', 'raulo', 'por eso te digo'];
// console.log(mixedDataTypes.length);
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle', 'Amazon'];

// console.log(itCompanies.indexOf('Oracle'));
// console.log(itCompanies[0]);
// console.log(itCompanies[4]);
// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies.join(' '), ' are big IT companies.');

// let indexOfitCompanies = itCompanies.indexOf('Google')
// if (indexOfitCompanies === -1) {
//     console.log('The company is not found');
// } else {
//     console.log('The company exists');
// }
// // console.log(itCompanies.sort());
// // console.log(itCompanies.reverse());
// // console.log(itCompanies.slice(0,3));
// // console.log(itCompanies.slice(3));
// // console.log(itCompanies.slice(3,4));
// itCompanies.shift()
// console.log(itCompanies);