console.log("Hello there. Shall we play?");
console.log("There are 5 rounds. One that gets more points, WINS!");

for (let round = 1, playerPoints = 0, computerPoints = 0; round <= 5; ) {
  console.log(`ROUND ${round}`);

  const gameChoices = ["paper", "rock", "scissors"];
  let computerSelection =
    gameChoices[Math.floor(Math.random() * gameChoices.length)];

  let playerProvidedChoice = prompt(
    "What's your move? Paper, rock or scissors?"
  );
  let playerSelection = playerProvidedChoice.toLowerCase();

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
      `${playerSelection} beats ${computerSelection}! Player gets a point!!!`
    );
    console.log(
      `Result: Player's points: ${playerPoints} \| Computer's points: ${computerPoints}`
    );
    round++;
  } else {
    ++computerPoints;
    console.log(
      `${computerSelection} beats ${playerSelection}! Computer get a point!!!`
    );
    console.log(
      `Result: Player's points: ${playerPoints} \| Computer's points: ${computerPoints}`
    );
    round++;
  }

  if (playerPoints + computerPoints === 5) {
    if (playerPoints > computerPoints) {
      console.log("You win! Congratulations, you beat the mighty computer!");
    } else {
      console.log("Computer wins! Better luck next time!");
    }
  }
}
