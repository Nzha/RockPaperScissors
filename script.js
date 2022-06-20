function computerPlay() {
    const shapes = ["rock", "paper", "scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

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
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "Invalid shape";
    }
}

function userInput() {
    const input = prompt("Please chose a shape between rock, paper, and scissors")
    const playerSelection = input.toLowerCase();
    // console.log(playerSelection);
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        alert("Please insert a valid shape");
    }
}

let playerScore = 0;
let computerScore = 0;

function game(n) {
    for (let i = 0; i < n; i++) {
        let round = playRound(userInput(), computerPlay());
        console.log(round);
        if (round.includes("win")) {
            playerScore += 1;
        } else if (round.includes("lose")) {
            computerScore += 1;
        }
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
    }
}

game(5);