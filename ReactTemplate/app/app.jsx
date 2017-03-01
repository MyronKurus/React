import React     from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import Main from 'Main';

//Loading Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// Load styles
require('style!css!sass!applicationStyles');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  app
);

/*


*/
