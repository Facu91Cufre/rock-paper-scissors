const pcChoices = ["piedra", "papel", "tijeras"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const iconsContainer = document.querySelector(".cont-icons");
const icons = document.querySelectorAll(".cont-icons i");
const result = document.querySelector(".result");

const userChoice = () => {
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("fa-hand-back-fist")) {
        determineWinner("piedra", pcChoice());
      } else if (icon.classList.contains("fa-hand")) {
        determineWinner("papel", pcChoice());
      } else if (icon.classList.contains("fa-hand-scissors")) {
        determineWinner("tijeras", pcChoice());
      }
    });
  });
};

const pcChoice = () => {
  let randomNumber = Math.floor(Math.random() * pcChoices.length);
  let pcChoice = pcChoices[randomNumber];
  if (pcChoice === "piedra") {
    return "piedra";
  } else if (pcChoice === "papel") {
    return "papel";
  } else {
    return "tijeras";
  }
};

const determineWinner = (userChoice, pcChoice) => {
  let outcome = document.querySelector(".result-text");
  if (!outcome) {
    outcome = document.createElement("p");
    outcome.classList.add("result-text");
    result.appendChild(outcome);
  }
  outcome.innerHTML = "";
  if (userChoice === pcChoice) {
    outcome.innerHTML = `La PC eligió ${pcChoice.toUpperCase()}. Empate :|`;
  } else if (
    (userChoice === "piedra" && pcChoice === "tijeras") ||
    (userChoice === "papel" && pcChoice === "piedra") ||
    (userChoice === "tijeras" && pcChoice === "papel")
  ) {
    outcome.innerHTML = `La PC eligión ${pcChoice.toUpperCase()}. ¡Ganaste!`;
  } else {
    outcome.innerHTML = `La PC eligió ${pcChoice.toUpperCase()}. Perdiste :(`;
  }
  setTimeout(() => {
    outcome.classList.add("show");
  }, 100);
  setTimeout(() => {
    result.innerHTML = "";
  }, 1500);
};

userChoice();
