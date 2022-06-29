const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result .text');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const controller = new AbortController();
let playerScore = 0;
let computerScore = 0;

/**
 * Pass the signal portion of the AbortController to the addEventListener function
 * and then anytime abort is called it will remove the event listener.
*/
buttons.forEach(button => button.addEventListener('click', displayResults, {signal: controller.signal}));

function displayResults(e) {
    result.textContent = playRound(playerPlay(e), computerPlay());
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    if (playerScore === 5) {
        result.textContent = 'Player wins! Congratulations';
        controller.abort();
    } else if (computerScore === 5) {
        result.textContent = 'Computer wins! Better luck next time';
        controller.abort();
    }
} 

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
    function result() {
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
    if (result().includes("win")) {
        playerScore += 1;
    } else if (result().includes("lose")) {
        computerScore += 1;
    }
    return result();
}

// function calcScore(e) {
//     let round = playRound(playerPlay(e), computerPlay());
//     if (round.includes("win")) {
//         playerScore += 1;
//     } else if (round.includes("lose")) {
//         computerScore += 1;
//     }
//     return round;
// }