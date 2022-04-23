'use strict';
// Генерация дефолтного рендомного числа от 0 до 20 включительно.
let number = Math.trunc(Math.random()*20+1);

// устанавливаем стартовый score
let score = 20;
let highScore = 0;


// функция (refactored), которая меняет текст в элементе .message
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}


// кнопка "check", adding event listener for click, and calling function after click — эта функция вернет значение (как обычно функция возвращает).
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    // value = возьмет значение введенное в инпут с классом .guess и переводится из строки в число с помощью Number()

    // when is no number
    if (!guess) {
        displayMessage("⛔️ No number!");
    }
    // when user is win
    else if (guess === number){
        displayMessage("🏆 Correct number!");
        document.querySelector(".number").textContent = number; 
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("body").style.transition = "1s";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").style.transition = "1s";
        
        // highscore logic
        if (highScore < score) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }        
    }
    // when number is different (refactored)
    else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? "🔺Too high!" : "🔻Too low!");
            score = score-1;
            document.querySelector(".score").textContent = score; 
        } else {
            displayMessage("🚩Game Over!");
            document.querySelector(".score").textContent = 0; 
        }
    }
});

// кнопка again
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    document.querySelector(".score").textContent = score;
    number = Math.trunc(Math.random()*20+1);
    document.querySelector(".number").textContent = "?"; 
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})
