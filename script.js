let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//This will generate a random number 0-9
const generateTarget = number => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    } else if (Math.abs(computerGuess - target) < Math.abs(currentHumanGuess - target)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        return humanScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}

