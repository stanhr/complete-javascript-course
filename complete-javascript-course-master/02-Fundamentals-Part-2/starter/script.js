'use strict';

/*

*/

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