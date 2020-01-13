const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"

}
];
//Monitor cards in play
var cardsInPlay = [];
//Check for a card match
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
 	}
}
function checkForMatch() {
	if (cardsInPlay[1] === cardsInPlay[2]) {
		alert("You found a match!"); 
	} else {
		alert("Sorry, try again.");
	}
//flip card and check pair
function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
			this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].rank + card[cardId].suit);
	console.log("User flipped" + cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].suit);
}
		if (cardsInPlay.length === 2); {
			if (cardsInPlay[0] === cardsInPlay[1]) {
		 checkForMatch();
		}
};


createBoard();
