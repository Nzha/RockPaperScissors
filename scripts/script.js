// function game(n) {
//     for (let i = 0; i < n; i++) {
//         let round = playRound(userInput(), computerPlay());
//         console.log(round);
//         if (round.includes("win")) {
//             playerScore += 1;
//         } else if (round.includes("lose")) {
//             computerScore += 1;
//         }
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
//     }
//     if (playerScore > computerScore) {
//         console.log("Player wins!");
//     } else if (playerScore < computerScore) {
//         console.log("Computer wins!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// game(5);



const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result .text');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {
    // result.textContent = playRound(playerPlay(e), computerPlay());
    result.textContent = playGame(e);
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}));

function computerPlay() {
    const shapes = ["rock", "paper", "scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

function playerPlay(e) {
    /**
     * Store user's shape wherever button is clicked
     * (on the emoji, the text, or outside those elements but inside the button div) 
     */
     return playerShape = e.target.closest('.shape').id;
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
    } else {
        return "It's a tie!";
    }
}

function playGame(e) {
    let round = playRound(playerPlay(e), computerPlay());
    if (round.includes("win")) {
        playerScore += 1;
    } else if (round.includes("lose")) {
        computerScore += 1;
    }
    return round;
}