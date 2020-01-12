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
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
	} else {
		alert("Sorry, try again.");
	}
}
//flip card and check pair
var flipCard = function(cardId) {
	console.log("User flipped" + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
	
if (cardsInPlay.length === 2){ 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
checkForMatch();


