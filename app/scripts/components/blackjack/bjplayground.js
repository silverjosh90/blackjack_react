var React = require('react')
var $ = require('jQuery')
var Hand = require('../../unit/cards')
var deck = ["2d","2h","2c","2s","3d","3h","3c","3s","4d","4h","4c","4s","5d","5h","5c","5s","6d","6h","6c","6s","7d","7h","7c","7s",
"8d","8h","8c","8s","9d","9h","9c","9s","10d","10h","10c","10s","Jd","Jh","Jc","Js","Qd","Qh","Qc","Qs","Kd","Kh","Kc","Ks",
"Ad", "Ah","Ac","As"]

var BlackJackBoard = React.createClass({
  getInitialState: function() {
    return {
      player: {},
      dealer: {},
      gameStatus: '',
      stayed: false
    }
  },
  draw: function() {
    var currentPlayer = new Hand(deck)
    var currentDealer = new Hand(deck)
    currentPlayer.cardDraw()
    currentDealer.cardDraw()
    this.setState({
      player: currentPlayer,
      dealer: currentDealer,
      gameStatus: '',
      stayed: false
    })
  },

  playerHit: function(param) {
    var currentPlayer = this.state.player
    if(currentPlayer.value >= 21) return;
    currentPlayer.hit()
    this.setState({
      player: currentPlayer
    })
  },
  dealerHit: function(param) {
    var currentPlayer = this.state.dealer
    if(currentPlayer.value >= 21) return;
    currentPlayer.hit()
    this.setState({
      dealer: currentPlayer
    })
  },
  stay: function() {
    this.setState({
      stayed: true
    })
    if(this.state.dealer.value < 17) {
      this.dealerHit()
      this.stay()
    }
    else if(this.state.dealer.value >= this.state.player.value && !this.state.dealer.bustAlert()) {
      console.log('in elseif');
      this.setState({
        gameStatus: <h5 className="alert alert-danger"> You Lose!! </h5>
      })
    }
    else {
      this.setState({
        gameStatus: <h5 className="alert alert-success"> You Win!! </h5>
      })
    }
  },
  render: function(){
    if(this.state.player.cards) {
      var card = this.state.player.cards.map(function(val){
        var newCard = val
        return <img style={{height: '100px'}} key={val} src={"../../images/playing_cards/" + newCard + ".png"}/>
      })
      var dealerCard = this.state.dealer.cards.map(function(val){
        var newCard = val
        return <img style={{height: '100px'}} key={val} src={"../../images/playing_cards/" + newCard + ".png"}/>
      })
      if(!this.state.player.bustAlert()){
        if(!this.state.stayed){
        var hitButton = <button className="btn btn-success" onClick={this.playerHit}> Hit </button>
        var stayButton =  <button className="btn btn-danger" onClick={this.stay}> Stay </button>
      }
      }
      else {
      if(this.state.player.cards.length ){var gameAlert = <h5 className="alert alert-danger"> You Lose!! </h5>}
    }

    }
    return(
      <div>
        <h1> Black Jack </h1>
        <button className="btn btn-primary" onClick={this.draw}>New Game</button>
        {gameAlert}
        {this.state.gameStatus}
        <h3> Dealer: {this.state.dealer.value} </h3>
        <div>{dealerCard} </div>
        <h3> Player: {this.state.player.value} </h3>
        <div>{card} </div>
        <div>
        {hitButton}
        {stayButton}
        </div>
      </div>
    )
  }
})

module.exports = BlackJackBoard
