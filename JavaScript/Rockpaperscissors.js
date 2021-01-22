const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput

  } else {
    console.log('Error, please type: rock, paper or scissors.')
  }
}

//console.log(getUserChoice('mouse'))
// Test env

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (UserChoice,ComputerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, computer won!";
      } else {
        return 'Congratulations, you won!';
      }
    }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry, computer won!";
      } else {
        return 'Congratulations, you won!';
    }
  }
  if (userChocie === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, computer won!";
      } else {
        return 'Congratulations, you won!';
    }
  }

  };

  console.log(determineWinner("rock", "paper"))
