'use strict';
// Генерация дефолтного рендомного числа от 0 до 20 включительно.
let number = Math.trunc(Math.random()*20+1);

// устанавливаем стартовый score
let score = 20;
let highScore = 0;

// кнопка "check", adding event listener for click, and calling function after click — эта функция вернет значение (как обычно функция возвращает).
document.querySelector(".check").addEventListener("click", function(){
    
    const guess = Number(document.querySelector(".guess").value);
    // value = возьмет значение введенное в инпут с классом .guess и переводится из строки в число с помощью Number()

    // when is no number
    if (!guess) {
        document.querySelector(".message").textContent = "⛔️ No number!";
    }
    // when user is win
    else if (guess === number){
        document.querySelector(".message").textContent = "🏆 Correct number!";
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

    // when number is higher
    else if (guess > number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🔺Too high!";
            score = score-1;
            document.querySelector(".score").textContent = score; 
        } else {
            document.querySelector(".message").textContent = "🚩Game Over!";
            document.querySelector(".score").textContent = 0; 
        }
    }
    // when number is lower
    else if (guess < number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🔻Too low!";
            score = score-1;
            document.querySelector(".score").textContent = score; 
        } else {
            document.querySelector(".message").textContent = "🚩Game Over!";
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
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})
