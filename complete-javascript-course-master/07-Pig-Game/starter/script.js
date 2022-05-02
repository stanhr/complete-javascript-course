'use strict';

// Selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // работает также как и первая строчка, но должно работать быстрее.
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// стартовые условия
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let playing = true;

const scores = [0, 0] // массив с total score значениями игроков
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function() {
    // switch to the next player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling the dice
btnRoll.addEventListener("click", function () {

    if (playing) {
        const dice = Math.trunc(Math.random()*6+1); 
    
        diceEl.classList.remove("hidden");
        // diceEl.setAttribute("src2", `dice-${dice}.png`); 
        // через setAttribute можно добавить новый атрибут в элемент и задать значение.
        // но в данном случае правильнее так менять значение src атрибута:
        diceEl.src = `dice-${dice}.png`;
    
        if (dice !== 1) {
             // аналогично currentScore = currentScore + dice;
            currentScore += dice;
    
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// hold button funcionality
btnHold.addEventListener("click", function(){
    if(playing){
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20) {
            // finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            diceEl.classList.add("hidden");
            playing = false; // останавливает игру
    
        } else if (currentScore === 0) {
            // если просто так нажал кнопку 
        } else {
            switchPlayer();
        }
    }
})



/// new game function — resset all important values and states
// но в идеале переделать все в одну функцию init — чтобы обьеденить с тем сетапом, который при старте страницы отображается
btnNew.addEventListener("click", function(){

    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    player0El.classList.add("player--active");

    //цикл по длине массиве, вместо
    // scores[0] = 0;
    // scores[1] = 0;
    for(let i = 0; i < scores.length; i++) {
        scores[i] = 0;
    }

    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add("hidden");
    playing = true;
});