import React     from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// require('style!css!../css/style.css');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
      </Route>
  </Router>,
  app
);
