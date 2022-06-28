// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === "rock" && computerSelection === "scissors"){
//         return "You win! Rock crushes scissors";
//     } else if (playerSelection === "rock" && computerSelection === "paper"){
//         return "You lose! Paper covers rock";
//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return "You win! Scissors cuts paper";
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//         return "You lose! Rock crushes scissors";
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "You win! Paper covers rock!";
//     } else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return "You lose! Scissors cuts paper";
//     } else {
//         return "It's a tie!";
//     }
// }

// let playerScore = 0;
// let computerScore = 0;

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
const score = document.querySelector('.score .text');

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerPlay(e);
    score.textContent = 'test';
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
     let playerShape = e.target.closest('.shape').id;
     console.log(playerShape); 
}
