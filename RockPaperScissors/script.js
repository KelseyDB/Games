
const rock =document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerButtons = [rock, paper, scissors];
const computerChoice = ["rock", "paper", "scissors"];

const gameLog = document.querySelector(".gameLog");
const button = document.getElementsByTagName("button");
const computerIcons = document.querySelector(".computerIcons");



function addCImg(computerResult){
  const cChoice = computerResult
  const computerIcon = document.createElement("img")
  computerIcons.append(computerIcon);
  computerIcon.src = "./Icons/icons8-"+cChoice+"-100.png"
}

function game(){

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
        result.innerText= "Computer won"
      }
      else{
        result.innerText="You win!!!"
      }
    }
    else if (pChoice == 'scissors'){
      if(computerResult =='rock'){
        result.innerText= "Computer won"
      }
      else{
        result.innerText="You win!!!"
      }
    }
    else if (pChoice == 'paper'){
      if(computerResult == 'scissors'){
        result.innerText= "Computer won"
    }
      else{
        result.innerText="You win!!!"
      }
    }
    
  });
  });
}

game();

//gamelogic
