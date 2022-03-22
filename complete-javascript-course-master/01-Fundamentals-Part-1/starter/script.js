/*
// alert("hello world");

console.log("hello world!");

let data = 1;
if (data === 1) (console.log(true))
else (console.log(false));

// Assignments
const country = "Ukraine";
const continent = "Europe";
let population = 40;
console.log(country, continent, population);
const isIsland = false;
const language = "ukrainian";
console.log(typeof(country), typeof(continent), typeof(population), typeof(isIsland), typeof(language));
console.log(language);

// LECTURE: Basic Operators
let splitPopulation = population / 2;
splitPopulation++;
console.log(splitPopulation);
let finlandPopulation = 6;
let averagePopulation = 33;
console.log(population < finlandPopulation);
console.log(averagePopulation > population);

// LECTURE: Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

//LECTURE: Taking Decisions: if / else Statements
if(population > averagePopulation) {
    console.log(`${country} population is above average.`);
}
else if (population < averagePopulation){
    console.log(`${country} population is ${averagePopulation - population} million below average.`)
} else {
    console.log(`${country} population is average.`)
}



/
// Coding Challenge #1 and #2

let markMass = prompt("Enter Mark Mass/weight in KG");
let markHeight = prompt("Enter Mark Height (example: 1.69)");
let markBMI = markMass / (markHeight * markHeight);

let johnMass = prompt("Enter John Mass/weight in KG");
let johnHeight = prompt("Enter John Height (example: 1.69)");
let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI){
    console.log(`Mark's BMI is ${markBMI} and greater than John ${johnBMI}`);
} else if (johnBMI > markBMI){
    console.log(`John's BMI is ${johnBMI} and greater than Mark ${markBMI}`);
} else {
    console.log(`Their BMI is equal`);
}



// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false (type coersion of course)
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 :)



// LECTURE: Equality Operators: == vs. ===
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log ("More than 1 border");
else if (numNeighbours === 0) console.log ("No borders");



// LECTURE: Logical Operators
let sarahChooseCountry = prompt("Which name of the country you wanna live?");
let sarahCheckLanguage = prompt("Language of country?");
let sarahCheckPopulation = prompt("Population of country?");
let sarahCheckIsland = Boolean(prompt("Is it island? Answer: true or false?"))
let sarahCriteriaLanguage = "English";
let sarahCriteriaPopulation = 50;
let sarahCriteriaIsland = false;

if (sarahCheckLanguage === sarahCriteriaLanguage && sarahCheckPopulation < sarahCriteriaPopulation && sarahCheckIsland != sarahCriteriaIsland) {
    console.log(`You should live at ${sarahChooseCountry}!`);
} else {
    console.log(`${sarahChooseCountry} does not meet your criteria :(`)
}
/// нужно разобраться как в сравнениях не учитывать регистр

*/

// Coding Challenge #3