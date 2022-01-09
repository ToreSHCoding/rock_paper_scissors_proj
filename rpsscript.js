

let computerScore = 0;
let playerScore = 0;
let gameRound = 1;


// bot randomly returns either rock, paper, or scissors
function computerPlay(){
  let botHandPosition = Math.floor(Math.random()*3)+1;

  if (botHandPosition === 1){
    return "rock"
  }

  else if (botHandPosition === 2){
    return "paper"
  }

  else if (botHandPosition === 3){
    return "scissors"
  }
  
}


// Plays one round of RPS and returns who won
function oneRound(playerSelection, computerSelection){
  

    switch (playerSelection)
    {
      case "rock":
        playerStance.textContent = "👊";
      break;
  
      case "paper":
        playerStance.textContent = "🖐";
      break;
  
      case "scissors":
        playerStance.textContent = "🖖";
      break;
  
    }
  
  

  // allow user to enter string in the form of Rock, Paper, or Scissors.
  // allow the bot to enter same type of string
  // let rock = 1, let paper = 2, let scissors = 3
  // if player answer is rock
  
  // this declaration makes computerSelection return a random value by using the computerPlay function every time the oneRound function is executed
  computerSelection = computerPlay();

  switch (computerSelection)
  {
    case "rock":
      computerStance.textContent = "👊";
    break;

    case "paper":
      computerStance.textContent = "🖐";
    break;

    case "scissors":
      computerStance.textContent = "🖖";
    break;

  } 
  

  // makes the playerSelection case-insensitive

  // playerSelection = prompt("Choose either Rock, Paper, or Scissors.").toLowerCase(); 
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection){
    return "It is a tie."

  } else if (playerSelection === "rock" && computerSelection === "paper"){
    computerScore +=1;
    return "You lose! Paper beats Rock"

  } else if (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore +=1;
    return "You win! Rock beats Scissors"



  } else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerScore +=1;
    return "You lose! Scissors beats Paper"

  } else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore +=1;
    return "You win! Paper beats Rock"



  } else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore +=1;
    return "You lose! Rock beats Scissors"

  } else if (playerSelection === "scissors" && computerSelection === "paper"){
  playerScore +=1;
  return "You win! Scissors beats Paper"

  } else {
  return "You did not select Rock, Paper, or Scissors!"}


  // if (
  //   (playerSelection === "rock" && computerSelection === "paper") ||
  //   (playerSelection === "paper" && computerSelection === "scissors") ||
  //   (playerSelection === "scissors" && computerSelection === "rock")
  // ){
  //   computerScore +=1;
  //   }
  
  // if (
  //   (playerSelection === "rock" && computerSelection === "scissors") ||
  //   (playerSelection === "paper" && computerSelection === "rock") ||
  //   (playerSelection === "scissors" && computerSelection === "paper")
  // ){
  //   playerScore+=1;
  // }

}




// shows the final results of the first to five and gives option to restart game
function finalResult() {
  if (playerScore === 5 && playerScore > computerScore) {
     endResult.textContent = "You win the first to five!";
     restartBtn.removeAttribute('disabled');
     rockbtn.disabled = true;
     paperbtn.disabled = true;
     scissorsbtn.disabled = true;


  } else if (computerScore === 5 && playerScore < computerScore) {
     endResult.textContent = "You lose the first to five...";
     restartBtn.removeAttribute('disabled');
     rockbtn.disabled = true;
     paperbtn.disabled = true;
     scissorsbtn.disabled = true;

  }
}



// plays a first to five game and resets on either overall player win or computer win
// code does not work properly anymore. only here for reference
// function game(){
//   computerPlay();
  
//   while (playerScore < 6 || computerScore < 6){
//     console.log("Game " + gameRound);
//     gameRound++; 
//     console.log(oneRound(playerSelection, computerSelection));
    
//     if (playerScore === 5){
//       playerScore = 0;
//       computerScore = 0;
//       gameRound = 1;
//      return alert ("You win the first to five!");
//     }

//     else if (computerScore === 5){
//       playerScore = 0;
//       computerScore = 0;
//       gameRound = 1;
//      return alert ("You lose the best of five...");
//     }
//   }

//   for (let i = 1; i < 6; i++){
//     console.log("Game " + i);
//     console.log(oneRound(playerSelection, computerSelection));
//   }

// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();

// game();


//------------- DOM ---------------\\
const playerStance = document.querySelector('#player-stance');
const computerStance = document.querySelector('#computer-stance');


const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', () => { 
 roundResult.textContent = oneRound("rock");
 finalResult();
 showPlayerScore();
 showComputerScore();
});

const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', () => {
  roundResult.textContent = oneRound("paper");
  finalResult();
  showPlayerScore();
  showComputerScore();
});

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', () => {
  roundResult.textContent = oneRound("scissors");
  finalResult();
  showPlayerScore();
  showComputerScore();
});

const roundResult = document.querySelector('#round-result');

const playerResult = document.querySelector('#player-result');
function showPlayerScore() {

  playerResult.textContent = `Player: ${playerScore}`;
}

const computerResult = document.querySelector('#computer-result');
function showComputerScore() {

  computerResult.textContent = `Computer: ${computerScore}`;
}

const endResult = document.querySelector("#end-result");


const restartBtn = document.querySelector('#restart-btn');
restartBtn.addEventListener('click', () => {
  restartFunc();
});

// function that restarts game when restartBtn is clicked
function restartFunc() {
  playerScore = 0;
  computerScore = 0;
  playerStance.textContent = "🤜"
  computerStance.textContent = "🤛"
  playerResult.textContent = `Player: ${playerScore}`;
  computerResult.textContent = `Computer: ${computerScore}`
  roundResult.textContent = "Choose your stance";
  endResult.textContent = 'Who will become the victor of the first to five?';
  restartBtn.disabled = true;
  rockbtn.disabled = false;
  paperbtn.disabled = false;
  scissorsbtn.disabled = false;
}