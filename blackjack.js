// Blackjack App
// 		By
// Fiona Murie

// Card variables
let suits = ['Hearts','Clubs','Diamonds','Spades'],
	values = ['Ace','King','Queen','Jack', 'Ten',
	'Nine','Eight','Seven','Six','Five','Four','Three','Two'];

// DOM variables
let textArea = document.getElementById('text-area'),
	newGameBtn = document.getElementById('new-game-btn'),
	hitBtn = document.getElementById('hit-btn'),
	stayBtn = document.getElementById('stay-btn');

// Game variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0;
	playerScore = 0,
	deck = [];

// Disable hit and stay btns at the beginning of the game 
hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

newGameBtn.addEventListener('click',function(){
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	dealerCards = [getNextCard(), getNextCard()];
	playerCards = [getNextCard(), getNextCard()];

	newGameBtn.style.display = 'none';
	hitBtn.style.display = 'inline';
	stayBtn.style.display = 'inline';
	showStatus();
});

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

function shuffleDeck(deck){
	for (let i = 0; i < deck.length; i++) {
		let swapIndex = Math.trunc(Math.random()* deck.length);
		let tmp = deck[swapIndex];
		deck[swapIndex] = deck[i];
		deck[i] = tmp;
	}
}

function getCardString(card) {
	return card.value + " of " + card.suit;
}

function showStatus(){
	if (!gameStarted){
		textArea.innerText = "Welcome to Blackjack!";
		return;
	}
	for(let i=0;i<deck.length; i++){
		textArea.innerText += '\n' + getCardString(deck[i]);
	}
}

function getNextCard() {
	return deck.shift();	
}

deck = createDeck();


// console.log("Welcome to Blackjack");
// console.log("You are dealt: ");
// console.log("	" + getCardString(playerCards[0]));
// console.log("	" + getCardString(playerCards[1]));
