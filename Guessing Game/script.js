

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(1,25)
// console.log(randomNumber);

const formElement = document.querySelector("form");

function handleForm (event) {
  guessedNumber = Number(event.target[0].value)
}

function compareNumber(){
  if (guessedNumber == randomNumber) {
    alert("You did it, " + guessedNumber + " was correct!");
  }
  if (guessedNumber == randomNumber+1 || guessedNumber  == randomNumber-1){
    alert("So close :(");
  }
  else {
    alert("Try again... you guessed "+ guessedNumber+" but the secret number was: " + randomNumber + ". :(")
  }
  
}

formElement.addEventListener("submit", (ev)=> {
  handleForm(ev);
  compareNumber();
})