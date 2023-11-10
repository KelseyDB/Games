
const rock =document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerButtons = [rock, paper, scissors];
const computerChoice = ["rock", "paper", "scissors"];

const gameLog = document.querySelector(".gameLog");
const button = document.getElementsByTagName("button");
const computerIcons = document.querySelector(".computerIcons");

let computerScore = 0
let playerScore = 0



function addCImg(computerResult){
  const cChoice = computerResult
  const computerIcon = document.createElement("img")
  computerIcons.append(computerIcon);
  computerIcon.src = "./Icons/icons8-"+cChoice+"-100.png"
}

function game(){
  const score = document.createElement('p')
  const scoreCont = document.querySelector(".score")
  scoreCont.appendChild(score)

  playerButtons.forEach(choice => {
  choice.addEventListener('click', function() {   
    
    const logPlayer = document.createElement('p');
    const computerResult = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    const result = document.createElement('p');
    logPlayer.innerHTML = "You : "+ choice.className + "<br> Computer: " + computerResult;
    gameLog.append(logPlayer);
    gameLog.append(result);
    addCImg(computerResult)

    const pChoice = choice.className
    console.log(pChoice);
    if (pChoice === computerResult){
      result.innerText = "Tie"
    }
    else if (pChoice ==='rock'){
    
      if(computerResult == 'paper'){
        computerScore++
        result.innerText= "Computer won"
        
      }
      else{
        playerScore++
        result.innerText="You win!!!"
        
      }
    }
    else if (pChoice == 'scissors'){
      if(computerResult =='rock'){
        computerScore++
        result.innerText= "Computer won"
        
      }
      else{
        playerScore++
        result.innerText="You win!!!"
        
      }
    }
    else if (pChoice == 'paper'){
      if(computerResult == 'scissors'){
        computerScore++
        result.innerText= "Computer won"
        
    }
      else{
        playerScore++
        result.innerText="You win!!!"
        
      }
    }
    score.innerHTML=( "Computer: "+computerScore+ "<br>Player: " +playerScore)
  });
  });
}

game();

//gamelogic
