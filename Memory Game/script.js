//TODO: 
// Make them turn on click

// Turn them back around if you clicked two
// Then implement the logic to only turn back if they don't match

// Clicking cards turns them around

// Explanation on the page itself

// make clicked cards go into array , check clicked cards to themselves array[0] === array[1]
//max 2 cards in array 
const flips = document.querySelector(".flips")
let flippedCards = []

const cards = [
  {
    src: "./Img/Gunpla/astrayRed.jpg"
  },
  {
    src: "./Img/Gunpla/barbatos.jpg"
  },
  {
    src: "./Img/Gunpla/calibarn.jpg"
  },
  {
    src: "./Img/Gunpla/efcf.jpg"
  },
  {
    src: "./Img/Gunpla/pink.jpg"
  },
  {
    src: "./Img/Gunpla/red.jpg"
  },
  {
    src: "./Img/Gunpla/unicorn.jpg"
  },
  {
    src: "./Img/Gunpla/zaku.jpg"
  },
  {
    src: "./Img/Gunpla/astrayRed.jpg"
  },
  {
    src: "./Img/Gunpla/barbatos.jpg"
  },
  {
    src: "./Img/Gunpla/calibarn.jpg"
  },
  {
    src: "./Img/Gunpla/efcf.jpg"
  },
  {
    src: "./Img/Gunpla/pink.jpg"
  },
  {
    src: "./Img/Gunpla/red.jpg"
  },
  {
    src: "./Img/Gunpla/unicorn.jpg"
  },
  {
    src: "./Img/Gunpla/zaku.jpg"
  },
];

function createCards(){
  //shuffle array 
  function shuffleArray(array) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  shuffleArray(cards)

  //creating the cards for each array index
  for (let i = 0; i < cards.length; i++) {
    const container = document.querySelector(".game-container");
    const card =document.createElement('img');
    card.setAttribute('data-id', i)
    card.src = "./Img/Gunpla/cardback.jpg"
    container.appendChild(card);

    card.addEventListener('click', flipCard());
  }
}


function flipCard() {
  let cardId = this.getAttribute('data-id')
  flippedCards.push(cards[cardId].src)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cards[cardId].src)
  if (flippedCards.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}
createCards();