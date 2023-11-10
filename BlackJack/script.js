const value = [2,3,4,5,6,7,8,9,10,10,10,10,11]
const number = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suit = ["hearts", "diamonds", "clubs", "spades"];

const deck = [];

//TODO: make deck of cards, add index from array number to index array suit then attach value
//TODO: add player button to ask for card
//TODO: Make button draw a random card from deck for player
//TODO: make stop button that draws dealer cards
//TODO: if player > 21 => Dealer win
//TODO: when player stops, dealer draws while score is 16 or less
//TODO: dealer stops when score is 17 or more
//TODO: dealer stops => player sccore == dealer score -> Tie
//TODO:                 player score< Dealer score(under 21) ->Dealer win
//TODO:                 dealer score > 21 -> Player win

for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < number.length; j++) {
    const card = { Number: number[j], Suit: suit[i]};
    deck.push(card);
    console.log(card);
  }
  
}