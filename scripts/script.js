const buttons = document.querySelectorAll('.player-shapes button');
const controller = new AbortController();
let playerScore = 0;
let computerScore = 0;

/**
 * Pass the signal portion of the AbortController to the addEventListener function
 * and then anytime abort is called it will remove the event listener.
*/
buttons.forEach(button => button.addEventListener('click', displayResults, {signal: controller.signal}));

function displayResults(e) {
    const computerShape = document.querySelector('.computer-shapes');
    const resultFirstLine = document.querySelector('.result .text:first-child');
    const resultSecondLine = document.querySelector('.result .text:last-child');
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const audioClick = document.querySelector('#click')
    const audioWin = document.querySelector('#win')
    const audioLose = document.querySelector('#lose')
    const reset = document.querySelector('.reset')

    audioClick.currentTime = 0;
    audioClick.play();

    let computerSelection = computerPlay();
    let result = playRound(playerPlay(e), computerSelection);
    let resultArr = result.split('!');

    // Determine computer' shape to display
    if (computerSelection.includes('rock')) {
        computerShape.querySelector('.emoji').textContent = '✊';
        computerShape.querySelector('.text').textContent = 'Rock';
    } else if (computerSelection.includes('paper')) {
        computerShape.querySelector('.emoji').textContent = '✋';
        computerShape.querySelector('.text').textContent = 'Paper';
    } else {
        computerShape.querySelector('.emoji').textContent = '✌️';
        computerShape.querySelector('.text').textContent = 'Scissors';
    }

    resultFirstLine.textContent = resultArr[0] + '!';
    resultSecondLine.textContent = resultArr[1];

    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    reset.setAttribute('id','reset');
    reset.addEventListener('click', () => window.location.reload());

    // Adjust text size and place when there's a tie and reset to default value on next click
    resultSecondLine.style.fontSize = '35px';
    if (resultArr[0].includes('tie')) {
        resultFirstLine.textContent = '';
        resultSecondLine.textContent = resultArr[0] + '!';
        resultSecondLine.style.fontSize = '50px';
    }

    // Display final result with sound and stop event
    if (playerScore === 5) {
        audioWin.currentTime = 0;
        audioWin.play();
        resultFirstLine.textContent = 'Player wins!';
        resultSecondLine.textContent = 'Congratulations';
        controller.abort();
    } else if (computerScore === 5) {
        audioLose.currentTime = 0;
        audioLose.play();
        resultFirstLine.textContent = 'Computer wins!';
        resultSecondLine.textContent = 'Better luck next time';
        controller.abort();
    }
} 

function computerPlay() {
    const shapes = ['rock', 'paper', 'scissors'];
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
        if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return "You win! Rock crushes scissors";
        } else if (playerSelection === 'rock' && computerSelection === 'paper'){
            return "You lose! Paper covers rock";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissors cuts paper";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You lose! Rock crushes scissors";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper covers rock";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You lose! Scissors cuts paper";
        } else {
            return "It's a tie!";
        }
    }
    if (result().includes('win')) {
        playerScore += 1;
    } else if (result().includes('lose')) {
        computerScore += 1;
    }
    return result();
}