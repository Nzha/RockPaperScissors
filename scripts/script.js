const buttons = document.querySelectorAll('.shapes button');
const controller = new AbortController();
let playerScore = 0;
let computerScore = 0;

/**
 * Pass the signal portion of the AbortController to the addEventListener function
 * and then anytime abort is called it will remove the event listener.
*/
buttons.forEach(button => button.addEventListener('click', displayResults, {signal: controller.signal}));

function displayResults(e) {
    const resultTop = document.querySelector('.result .text-top');
    const resultBottom = document.querySelector('.result .text-bottom');
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const audioClick = document.querySelector('#click')
    const audioWin = document.querySelector('#win')
    const audioLose = document.querySelector('#lose')
    const reset = document.querySelector('.reset')

    audioClick.currentTime = 0;
    audioClick.play();

    let result = playRound(playerPlay(e), computerPlay());
    let resultArr = result.split('!');
    
    resultTop.textContent = resultArr[0] + '!';
    resultBottom.textContent = resultArr[1];
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    reset.setAttribute('id','reset');
    reset.addEventListener('click', () => window.location.reload());

    // Adjust text size and place when there's a tie
    if (resultArr[0].includes('tie')) {
        resultTop.textContent = '';
        resultBottom.textContent = resultArr[0] + '!';
        resultBottom.style.fontSize = '50px';
    }

    if (playerScore === 5) {
        audioWin.currentTime = 0;
        audioWin.play();
        resultTop.textContent = 'Player wins!';
        resultBottom.textContent = 'Congratulations';
        controller.abort();
    } else if (computerScore === 5) {
        audioLose.currentTime = 0;
        audioLose.play();
        resultTop.textContent = 'Computer wins!';
        resultBottom.textContent = 'Better luck next time';
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