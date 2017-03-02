import React     from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load styles
require('style!css!sass!appStyles');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  app
);
