//Excercise 2

//1.
import {countries} from "./countries.js";
console.log(countries);

import {webTechs} from "./web_tech.js";
console.log(webTechs);


//2.
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words);
console.log(words.length);

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const newProduct = 'Meat'; 
let found = shoppingCart.findIndex(e => e.toLowerCase() === newProduct.toLowerCase())
if (found === -1) {
    shoppingCart.unshift(newProduct);
}
console.log(shoppingCart);

const newProduct2 = 'Sugar';
found = shoppingCart.findIndex(e => e.toLowerCase() === newProduct2.toLowerCase() )
if (found === -1) {
    shoppingCart.push(newProduct2);
}
console.log(shoppingCart);

const newProduct3 = 'Honey';
let filteredOutHoney = shoppingCart.filter(e => e.toLowerCase() !== newProduct3.toLowerCase())
console.log(filteredOutHoney);

const newProduct4 = 'Tea';
found = shoppingCart.findIndex(e => e.toLowerCase()  === newProduct4.toLowerCase() )
if (found !== -1) {
    shoppingCart[found] = 'Green Tea'
}
console.log(shoppingCart);

//4.
const newCountry = 'Ethiopia';
found = countries.findIndex(e => e.toLowerCase() === newCountry.toLowerCase() )
if (found === -1) {
    countries.push(newCountry.toUpperCase());
}
console.log(countries);

//5.
const newTech = 'Sass';
found = webTechs.findIndex(e => e.toLowerCase() === newTech.toLowerCase() )
if (found === -1) {
    webTechs.push(newTech);
    console.log(webTechs);
}
else {
    console.log("Sass is a CSS preprocess'")
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise 3
//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedAges = [...ages].sort();
console.log(sortedAges);

let min = sortedAges[0];
let max = sortedAges[sortedAges.length-1];
console.log('Min: '+ min);
console.log('Max: '+ max);

let sum = ages.reduce ((sum, i) => sum + i);
console.log(sum);
let avg =  sum/ages.length;
console.log('Average: '+ avg);
console.log('Range: ' + (max - min));
console.log('Gap between min and avg: ' + roundToTwo(Math.abs(min - avg)) );
console.log('Gap betwteen max and avg: ' +  roundToTwo(Math.abs(max - avg)));

let midIndex = Math.floor(sortedAges.length/2);
let median = sortedAges.length%2!==0 ? sortedAges[midIndex] : (sortedAges[midIndex-1] + sortedAges[midIndex])/2
console.log('Madian: ' + median);

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

//2. 
let midCountryIndex = Math.floor(countries.length/2);
console.log(countries.slice(0,10));
if (countries.length%2!==0){
    console.log(countries[midCountryIndex])
} else {
    console.log(countries[midCountryIndex -1]+ ' ' + countries[midCountryIndex]);
}
console.log(midCountryIndex);
