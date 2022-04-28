'use strict';

let dice;
let player1Score; // player 1 total score
let player2Score; // player 2 total score
let player1CurrentScore; // player 1 current score
let player2CurrentScore; // player 2 current score

const newGameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");
const rollBtn = document.querySelector(".btn--roll");
let player1ScoreLabel = document.querySelector("#score--0");
let player2ScoreLabel = document.querySelector("#score--1");
let player1CurrentScoreLabel = document.querySelector("#current--0");
let player2CurrentScoreLabel = document.querySelector("#current--1");

// Функция "New Game"
const newGame = function (){
    player1Score = 0;
    player2Score = 0;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    player1ScoreLabel.textContent = player1Score;
    player2ScoreLabel.textContent = player2Score;
    player1CurrentScoreLabel.textContent = player1CurrentScore;
    player2CurrentScoreLabel.textContent = player2CurrentScore;
    console.log("new game function was called");
}
newGame();
newGameBtn.addEventListener("click", newGame);

// Функция бросить кость (от 1 до 6). Обновляет dice переменную, меняет картинку в DOM.
const rollDiceFunction = function() {
    dice = Math.trunc(Math.random()*6+1);
    document.querySelector(".dice").setAttribute("src", `dice-${dice}.png`);
};

// Вызов функции бросить кость, по нажатию кнопки
rollBtn.addEventListener("click", rollDiceFunction);