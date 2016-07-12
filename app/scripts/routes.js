var React = require('react')
var Router = require('react-router').Router
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory
var ReactDOM = require("react-dom")
var Splash = require('./components/splash')
var BlackJack = require('./components/blackjack/bjplayground')


var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Splash} />
    <Route path="/bj" component={BlackJack} />
  </Router>
);

module.exports = routes
