function Hand(deck) {
  this.deck = deck;
  this.cards = [];
  this.value = 0;
  this.drawn = false
}


Hand.prototype.cardDraw = function() {
  if (!this.drawn){
    var arr = [this.randomCard(),this.randomCard()];
    this.cards = this.cards.concat(arr);
    this.drawn = true
  }

}

Hand.prototype.randomCard = function() {
  var card = this.deck[Math.floor(Math.random() * this.deck.length)];
  this.addValue(card);
  this.deck.splice(this.deck.indexOf(card),1);
  return card;
}

Hand.prototype.hit = function() {
  this.cards.push(this.randomCard());
}

Hand.prototype.addValue = function(card) {
  if((/10/g).test(card)) {
    this.value+=10
    return;
  }
  this.value += isNaN(Number(card[0])) ? 10 : Number(card[0]);

}

Hand.prototype.bustAlert = function(){
  return (this.value > 21)
}

module.exports = Hand
