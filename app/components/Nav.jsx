var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e){
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function(e) {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather app</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" ref="search" placeholder="Enter city"/>
                </li>
                <li>
                  <input type="Submit" className="button" value="Get Weather"/>
                </li>
              </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;


var old = (
  <div>
    <h2>Navigation</h2>



  </div>
)
