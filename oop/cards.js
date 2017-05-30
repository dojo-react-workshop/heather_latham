function PlayerConstructor(name, hand){
	var player = {};

	player.name = name;
	player.hand = hand;

	return player;
}

function createCard (suit, value) {
	var card = {};

	card.suit = suit;
	card.value = value;

	return card;
}

function createDeck (){

	var deck = [];

	var cardArr = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
	var suitArr = ["Spades", "Diamonds", "Hearts", "Clubs"];

	for (var i = 0; i < cardArr.length; i++){
		for (var j = 0; j < suitArr.length; j++){
			card = new createCard(suitArr[j], cardArr[i]);
			deck.push(card);
		}
	}
	return deck;
}

function shuffle(deck) {
  var m = deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
}

function reset(){
	newdeck = createDeck();
}

function deal(deck){
	var index = Math.trunc(Math.random() * deck.length);
	var randomCard = deck[index];
	deck = deck.splice(index, 1);
	return randomCard;
}

function discard(playerhand, playerdiscard){
	playerhand.pop();
	// playerhand = playerhand.splice((playerdiscard-1), 1);
	return playerhand;
}


var newdeck = [];
newdeck = createDeck();
shuffle(newdeck);

var Heather = PlayerConstructor("Heather", []);

Heather.hand.push(deal(newdeck));
Heather.hand.push(deal(newdeck));
Heather.hand.push(deal(newdeck));

console.log(Heather);

Heather.hand = discard(Heather.hand, 1);
console.log(Heather);
Heather.hand.push(deal(newdeck));
console.log(Heather);

console.log(newdeck);





