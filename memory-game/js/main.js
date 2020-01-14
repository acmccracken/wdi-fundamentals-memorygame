


//let cards = ["queen","queen","king","king"];
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
cardElement.setAttribute(src, 'cards[cardId].cardImage');

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard(){
this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
//checkForMatch();
//I'm not sure how the example is supposed to run
//checkForMatch only once from within the flipCard function
}

function createBoard(){
	for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.adEventListener('click', 'flipCard');
    document.getElementById('cardElement').appendChild('game-board');
}
}


createBoard();


