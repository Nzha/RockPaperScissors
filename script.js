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
        return "rock crushes scissors, player wins!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "paper covers rock, player loses!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "scissors cuts paper, player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "rock crushes scissors, player loses!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "paper covers rock, player wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "scissors cuts paper, player loses!";
    } else {
        return "It's a tie!";
    }
}