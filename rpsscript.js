

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

  finalResult();

  // allow user to enter string in the form of Rock, Paper, or Scissors.
  // allow the bot to enter same type of string
  // let rock = 1, let paper = 2, let scissors = 3
  // if player answer is rock
  
  // this declaration makes computerSelection return a random value by using the computerPlay function every time the oneRound function is executed
  computerSelection = computerPlay();

  // showPlayerScore();
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

function finalResult() {
  if (playerScore === 5) {
    alert("You win the first to five!");

  } else if (computerScore === 5) {
    alert("You lose the first to five!");
  }
}

// plays a first to five game and resets on either overall player win or computer win
function game(){
  computerPlay();
  
  while (playerScore < 6 || computerScore < 6){
    console.log("Game " + gameRound);
    gameRound++; 
    console.log(oneRound(playerSelection, computerSelection));
    
    if (playerScore === 5){
      playerScore = 0;
      computerScore = 0;
      gameRound = 1;
     return alert ("You win the first to five!");
    }

    else if (computerScore === 5){
      playerScore = 0;
      computerScore = 0;
      gameRound = 1;
     return alert ("You lose the best of five...");
    }
  }

  for (let i = 1; i < 6; i++){
    console.log("Game " + i);
    console.log(oneRound(playerSelection, computerSelection));
  }

}

const playerSelection = "rock";
const computerSelection = computerPlay();

// game();


//------------- DOM ---------------\\
const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', () => { 
 roundResult.textContent = oneRound("rock");
 showPlayerScore();
});

const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', () => {
  roundResult.textContent = oneRound("paper");
  showPlayerScore();

});

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', () => {
  roundResult.textContent = oneRound("scissors");
  showPlayerScore();

});

const roundResult = document.querySelector('#round-result');

function showPlayerScore() {

const playerResult = document.querySelector('#player-result');
playerResult.textContent = playerScore;

}