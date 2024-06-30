"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score").textContent;
let highscore = 0;

function display(element, message) {
  document.querySelector(element).textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    display(".message", "🚫 No Number Guessed...");
  } else if (guess === secretNumber) {
    display(".message", "🎉Correct Number!!");
    display(".number", secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      display(".highscore", highscore);
    }
  } else if (guess != secretNumber) {
    display(".message", guess > secretNumber ? "📈Too high" : "📈Too Low");
    score--;
    if (score === 0) {
      display(".message", "💥You Lost!!");
      display(".score", 0);
    }
    display(".score", score);
  }
});

//RESET

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  display(".score", score);
  display(".message", "Start guessing...");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  display(".number", "?");
  display(".guess", "");
});
