// Blackjack App
// 		By
// Fiona Murie


let suits = ['Hearts','Clubs','Diamonds','Spades'],
	values = ['Ace','King','Queen','Jack', 'Ten',
	'Nine','Eight','Seven','Six','Five','Four','Three','Two'];


function createDeck() {
	let deck = [];
	for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
		for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
			let card = {
				suit: suits[suitIndex],
				value: values[valueIndex]
			};
			deck.push(card);
		}			
	}
	return deck;
}

function getCardString(card) {
	return card.value + " of " + card.suit;
}

function getNextCard() {
	return deck.shift();	
}

deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack");
console.log("You are dealt: ");
console.log("	" + getCardString(playerCards[0]));
console.log("	" + getCardString(playerCards[1]));
