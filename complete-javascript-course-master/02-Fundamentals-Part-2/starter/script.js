'use strict';

/*
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    let result = `The ${country} has ${population} million people and its capital city is ${capitalCity}`;
    return result;
}

let ukraine = describeCountry("Ukraine", 44, "Kyiv");
console.log(ukraine);

let poland = describeCountry("Poland", 38, "Warsawa");
console.log(poland);

let albania = describeCountry("Albania", 3, "Tirana");
console.log(albania);

*/

// LECTURE: Function Declarations vs. Expressions

// function declaration (population in millions)
function percentageOfWorld1(population) {
    return `${population / 7900 * 100}%`;
}

let population1 = percentageOfWorld1(100);
let population2 = percentageOfWorld1(44);
let population3 = percentageOfWorld1(5);

console.log(population1, population2, population3);

// function expression
let percentageOfWorld2 = function (population) {
    return `${population / 7900 * 100}%`;
}

let population4 = percentageOfWorld2(100);
let population5 = percentageOfWorld2(44);
let population6 = percentageOfWorld2(5);

console.log(population4, population5, population6);