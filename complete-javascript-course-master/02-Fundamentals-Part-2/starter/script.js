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



// LECTURE: Arrow Functions

let percentageOfWorld3 = population => `${population / 7900 * 100}%`;
console.log(percentageOfWorld3(100));
console.log(percentageOfWorld3(44));
console.log(percentageOfWorld3(5));


// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
}

function percentageOfWorld1(population) {
    return `${population / 7900 * 100}%`;
}

console.log(describePopulation("Ukraine", 44));
console.log(describePopulation("Poland", 38));
console.log(describePopulation("Albania", 3));



// JavaScript Fundamentals – Part 2 — Coding Challenge #1

const calcAverage = (result1, result2, result3) => (result1 + result2 + result3) / 3;

let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

function checkWinner() {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins * 2) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return console.log(`There is no winner (${avgKoalas} vs. ${avgDolphins})`)
    }
}

checkWinner();

// но в своем решении он всетаки придерживается того, чтобы в функции были аргументы. я же решил тут сократить их и напрямую брать внутри второй функции значения из внешних/глобальных переменных.

*/

// LECTURE: Introduction to Arrays

const populations = [10, 20, 30, 40];
if (populations.length === 4) console.log("The aray has 4 values");

function percentageOfWorld1(population) {
    return `${population / 7900 * 100}%`;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]),];
console.log(percentages);
