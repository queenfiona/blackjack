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

hitBtn.addEventListener('click', function(){
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});

stayBtn.addEventListener('click', function(){
	gameOver = true;
	checkForEndOfGame();
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

function getCardNumericValue(card){
	switch(card.value){
		case 'Ace':
			return 1;
		case 'Two':
			return 2;
		case 'Three':
			return 3;
		case 'Four':
			return 4;
		case 'Five':
			return 5;
		case 'Six':
			return 6;
		case 'Seven':
			return 7;
		case 'Eight':
			return 8;
		case 'Nine':
			return 9;
		default:
			return 10;
	}
}

function getScore(cardArray){
	let score = 0;
	let hasAce = false;
	for (let i = 0; i < cardArray.length; i++) {
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if (card.value == 'Ace'){
			hasAce = true;
		}
	}

	if ( hasAce && score + 10 <=21){
		return score + 10;
	}
	return score;
}

function updateScores(){
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}

// function check

function showStatus(){
	if (!gameStarted){
		textArea.innerText = "Welcome to Blackjack!";
		return;
	}

	let dealerCardString = '';
	for (let i = 0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i]) + '\n';
	}

	let playerCardString = '';
	for (let i = 0; i < playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i]) + '\n';
	}
	
	updateScores();

	textArea.innerText =
		'Dealer has:\n' +
		dealerCardString +
		'(Score:' + dealerScore + ')\n\n'+

		'Player has:\n' +
		playerCardString +
		'(Score: ' + playerScore + ' )\n\n';

	if (gameOver){
		if (playerWon){
			textArea.innerText += 'YOU WIN';
		}else{
			textArea.innerText += 'DEALER WINS';
		}
		newGameBtn.style.display = 'inline';
		hitBtn.style.display = 'none';
		stayBtn.style.display = 'none';
	}
}

function getNextCard() {
	return deck.shift();	
}

deck = createDeck();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        