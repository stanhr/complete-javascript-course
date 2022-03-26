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



// Coding Challenge #3
// доработал, используя промт, в который я разобрался как получить значения в числе с точкой — функция parseFloat() — число с плавающей точкой; parseInt() — целое число; 
// Внимание! Если использовать целые числа = найдены баги, потому что часто cредний результат это не целое число. И чтобы в таком случае программа работала корректно — нужно еще разбираться с тем как округлять эти float в целые числа. Но это потом.  

let dolphinsResult1 = parseFloat(prompt("Enter Dolphins Result 1"));
let dolphinsResult2 = parseFloat(prompt("Enter Dolphins Result 2"));
let dolphinsResult3 = parseFloat(prompt("Enter Dolphins Result 3"));

let koalasResult1 = parseFloat(prompt("Enter Koalas Result 1"));
let koalasResult2 = parseFloat(prompt("Enter Koalas Result 2"));
let koalasResult3 = parseFloat(prompt("Enter Koalas Result 3"));

let dolphinsAverage = (dolphinsResult1 + dolphinsResult2 + dolphinsResult3) / 3;
let koalasAverage = (koalasResult1 + koalasResult2 + koalasResult3) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    alert(`🥇Dolphins is winner! ${dolphinsAverage} vs. ${koalasAverage}`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    alert(`🥇Koalas is winner! ${koalasAverage} vs. ${dolphinsAverage}`);
} else if (dolphinsAverage === koalasAverage && koalasAverage >= 100 && dolphinsAverage >= 100) {
    alert("There is a draw! 🤝");
} else {
    alert("There is no winner! 🤝");
}



// LECTURE: The switch Statement

let language = prompt("Please enter the language");

switch (language) {
    case "chinese":
    case "mandarin":
        alert("MOST number of native speakers!");
        break;
    case "spanish":
        alert("2nd place in number of native speakers");
        break;
    case "english":
        alert("3rd place");
        break;
    case "hindi":
        alert("Number 4");
        break;
    case "arabic":
        alert("5th most spoken language");
        break;
    default:
        alert("Great language too :D");
}



// LECTURE: The Conditional (Ternary) Operator

let countryPopulation = prompt("Enter your country population");

alert(`${countryPopulation > 33 ? "Country population is above average" : "Country population is below average"}`);

*/

// Coding Challenge #4

let bill = parseFloat(prompt("Enter the bill value and we will count the tip"));
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

alert(`The bill was ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);