const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Fonction pour le choix de l'ordinateur
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fonction pour déterminer le gagnant
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

// Gestion des clics pour chaque bouton
buttonRock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    resultDiv.textContent = `You: Rock | Computer: ${computerChoice} | Result: ${result}`;
});

buttonPaper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    resultDiv.textContent = `You: Paper | Computer: ${computerChoice} | Result: ${result}`;
});

buttonScissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    resultDiv.textContent = `You: Scissors | Computer: ${computerChoice} | Result: ${result}`;
});