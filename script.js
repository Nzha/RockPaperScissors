function computerPlay() {
    const shapes = ["rock", "paper", "scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// const playerSelection = prompt("Please chose a shape between rock, paper, and scissors")
// console.log(playerSelection)

// if (playerSelection === "") {
//     alert("Empty value");
// } else if (!isNaN(playerSelection))
//     alert("Value is not a string");

// let computer = computerPlay();
// console.log(computer);
// console.log("rock");

// console.log(playRound("rock", computer));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock crushes scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper covers rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cuts paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock crushes scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper covers rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cuts paper";
    } else {
        return "It's a tie!";
    }
}

let playerScore = 0;
let computerScore = 0;

function game(n) {
    for (let i = 0; i < n; i++) {
        let round = playRound(playerSelection, computerPlay());
        console.log(round);
        if (round.includes("win")) {
            playerScore += 1;
        } else if (round.includes("lose")) {
            computerScore += 1;
        }
    }
}

playerSelection = "rock";
game(5);

console.log(playerScore);
console.log(computerScore);