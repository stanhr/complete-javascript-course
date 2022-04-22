'use strict';

// secret number
document.querySelector(".number").textContent; 

// message (start guessing)
document.querySelector(".message").textContent;

// score field
document.querySelector(".score").textContent;

// high score field
document.querySelector(".highscore").textContent;

// receive data from input (value)
document.querySelector(".guess").value;


// Генерация дефолтного рендомного числа от 0 до 20 включительно.
const number = Math.trunc(Math.random()*20+1)
document.querySelector(".number").textContent = number;

// кнопка "check", adding event listener for click, and calling function after click — эта функция вернет значение (как обычно функция возвращает).
document.querySelector(".check").addEventListener("click", function(){
    document.querySelector(".guess").value;
    // value = возьмет значение введенное в инпут с классом .guess
})