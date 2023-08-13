console.log("Hello there. Shall we play?");
console.log("There are 5 rounds. The player that gets more points, WINS!");
console.log("Click the button of the page if you're ready");

const button = document.getElementById("startGameButton");

function game() {
  const gameChoices = ["paper", "rock", "scissors"];

  for (let round = 1, playerPoints = 0, computerPoints = 0; round <= 5; ) {
    console.log(`ROUND ${round}`);

    let computerSelection =
      gameChoices[Math.floor(Math.random() * gameChoices.length)];
    let computerSelectionCapitalised =
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    let playerProvidedChoice = prompt(
      "What's your move? Paper, rock or scissors?"
    );
    let playerSelection = playerProvidedChoice.toLowerCase();
    let playerSelectionCapitalised =
      playerProvidedChoice.charAt(0).toUpperCase() +
      playerProvidedChoice.slice(1).toLowerCase();

    let getPlayerChoice = function () {
      return `Player's choice is: ${playerSelection}`;
    };

    let getComputerChoice = function () {
      return `Computer's choice is: ${computerSelection}`;
    };

    console.log(getPlayerChoice());
    console.log(getComputerChoice());

    if (
      playerSelection !== "paper" &&
      playerSelection !== "rock" &&
      playerSelection !== "scissors"
    ) {
      console.log(
        `${playerSelection} is not a valid choice. Choose again and make sure to check your spelling.`
      );
    } else if (playerSelection === computerSelection) {
      console.log("It's a draw! Nobody gets a point - play again!");
      console.log(
        `Result: Player's points: ${playerPoints} \| Computer's points: ${computerPoints}`
      );
    } else if (
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "rock") ||
      (computerSelection === "rock" && playerSelection === "paper")
    ) {
      ++playerPoints;
      console.log(
        `${playerSelectionCapitalised} beats ${computerSelection}! Player gets a point!!!`
      );
      console.log(
        `Result: Player's points: ${playerPoints} \| Computer's points: ${computerPoints}`
      );
      round++;
    } else {
      ++computerPoints;
      console.log(
        `${computerSelectionCapitalised} beats ${playerSelection}! Computer gets a point!!!`
      );
      console.log(
        `Result: Player's points: ${playerPoints} \| Computer's points: ${computerPoints}`
      );
      round++;
    }

    if (playerPoints + computerPoints === 5) {
      if (playerPoints > computerPoints) {
        alert("You win! Congratulations, you beat the mighty computer!");
      } else {
        alert("Computer wins! Better luck next time!");
      }
    }
  }
}

button.addEventListener("click", game);
