var expect = require('chai').expect
var Hand = require('../unit/cards')

var deck = ["2d","2h","2c","2s","3d","3h","3c","3s","4d","4h","4c","4s","5d","5h","5c","5s","6d","6h","6c","6s","7d","7h","7c","7s",
"8d","8h","8c","8s","9d","9h","9c","9s","10d","10h","10c","10s","Jd","Jh","Jc","Js","Qd","Qh","Qc","Qs","Kd","Kh","Kc","Ks",
"Ad", "Ah","Ac","As"]

describe('#cards', function(){

	it('returns an array', function(){
    var hand = new Hand(deck)
    hand.cardDraw()
	  expect(hand.cards).to.be.instanceOf(Array)
	})
  it('returns array with two values', function(){
    var hand = new Hand(deck)
    hand.cardDraw()
  	expect(hand.cards.length).to.equal(2)
  })
  it('each value has a card number and suit', function(){
    var hand = new Hand(deck)
    hand.cardDraw()
    expect(Number(hand.cards[0][0])).to.be.a('number')
    expect(hand.cards[0][1]).to.be.a('string')
  })
  it('can only draw once', function(){
    var hand = new Hand(deck)
    hand.cardDraw()
    var drawn = hand.cards
    hand.cardDraw()
    expect(hand.cards).to.equal(drawn)
  })
})
describe('#hit', function(){
	it('adds random card to deck', function(){
    var hand = new Hand(deck)
    hand.cardDraw()
    hand.hit()
	  expect(hand.cards.length).to.equal(3)
	})
  it('always adds a different card', function(){
    var hand = new Hand(deck)
    hand.hit()
    hand.hit()
  	expect(hand.cards[0] == hand.cards[1]).to.equal(false)
  })
})
describe('#Value', function(){
	it('can add the value of a  one digit number card', function(){
    var hand = new Hand()
    hand.addValue('3s')
	  expect(hand.value).to.equal(3)
	})
	it('can add the value of a face card', function(){
    var hand = new Hand()
    hand.addValue('Qh')
	  expect(hand.value).to.equal(10)
	})
  it('can calculate value of 2 digit number card', function(){
    var hand = new Hand()
    hand.addValue('10s')
  	expect(hand.value).to.equal(10)
  })

})
describe('#Value alert', function(){
	it('returns bust if card value is over 21', function(){
    var hand = new Hand()
    hand.value = 22
	  expect(hand.bustAlert()).to.equal(true)
	})
	it('returns still good if card value is less 21', function(){
    var hand = new Hand()
    hand.value = 18
	  expect(hand.bustAlert()).to.equal(false)
	})


})
