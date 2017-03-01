import React  from "react";
import {Link, IndexLink} from 'react-router';

var styles = {
  fontWeight: '700',
};

export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div class="top-bar">
        <div class="top-bar-left">

          <ul class="menu">
            <li class="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={styles}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={styles}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={styles}>Examples</Link>
            </li>
          </ul>
        </div>

        <div class="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul class="menu">
              <li><input type="search" placeholder="Search weather" ref="search"/></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </form>
        </div>

      </div>
    );
  }
};

// module.exports = Nav;
