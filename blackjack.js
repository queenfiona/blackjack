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
			deck.push(values[valueIndex] + ' of ' + suits[suitIndex]);
		}			
	}
	return deck;
}

function getNextCard() {
	return deck.shift();	
}

deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

for (let i = 0; i< deck.length; i++){
	console.table(deck[i]);
}

console.log("Welcome to Blackjack");
console.log("You are dealt: ");
console.log("	" + playerCards[0]);
console.log("	" + playerCards[1]);
