import React  from "react";
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div class="top-bar">
        <div class="top-bar-left">

          <ul class="menu">
            <li class="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>

        <div class="top-bar-right">
          <ul class="menu">
            <li class="active-link">Created by<a href="https://github.com/MyronKurus/" target="_blank">Myron Kurus</a></li>
          </ul>
        </div>

      </div>
    );
  }
};
