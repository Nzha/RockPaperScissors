// Randomly assign a shape (rock, paper or scissors) and store it in a variable
const shapes = ["rock", "paper", "scissors"];
const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
console.log(randomShape)

// Prompt user for a shape
const userSelection = prompt("Please chose a shape between rock, paper, and scissors")
console.log(userSelection)

// if (userSelection === "") {
//     alert("Empty value");
// } else if (!isNaN(userSelection))
//     alert("Value is not a string");

playRound(userSelection, randomShape)

// Compare the 2 shapes and display results: draw, win or loss
function playRound(userSelection, computerSelection) {
    if (userSelection === "rock" && computerSelection === "scissors"){
        alert("Rock crushes scissors, player wins!")
    } else if (userSelection === "rock" && computerSelection === "paper"){
        alert("Paper covers rock, player loses!")
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        alert("Scissors cuts paper, player wins!")
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        alert("Rock crushes scissors, player loses!")
    } else if (userSelection === "paper" && computerSelection === "rock") {
        alert("Paper covers rock, player wins!")
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        alert("Scissors cuts paper, player loses!")
    } else {
        alert("It's a tie!")
    }
}