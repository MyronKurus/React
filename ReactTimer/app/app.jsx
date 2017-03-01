import React     from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load styles
require('style!css!sass!applicationStyles');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  app
);
