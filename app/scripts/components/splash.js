var React = require('react')
var Link = require('react-router').Link

var Splash = React.createClass({
  render: function() {
    return (
      <div>
      <Link to={'/bj'} className="btn btn-success">Play BlackJack</Link>
      </div>
    )
  }
})

module.exports = Splash
