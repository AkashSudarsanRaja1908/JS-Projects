const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');
const resetButton = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', playGame));
resetButton.addEventListener('click', resetScores);

function playGame(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    updateScores(result);
    displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScores(result) {
    if (result === 'win') {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

function displayResult(userChoice, computerChoice, result) {
    if (result === 'win') {
        resultMessage.textContent = `You win! ${capitalize(userChoice)} beats ${computerChoice}.`;
        resultMessage.style.animation = 'win 1s';
    } else if (result === 'lose') {
        resultMessage.textContent = `You lose! ${capitalize(computerChoice)} beats ${userChoice}.`;
        resultMessage.style.animation = 'lose 1s';
    } else {
        resultMessage.textContent = `It's a draw! You both chose ${userChoice}.`;
        resultMessage.style.animation = 'draw 1s';
    }
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = 'Make your move!';
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}