import React from 'react';
import Nav from './Nav';

// export default class Main extends React.Component {
//
//     render() {
//         return (
//             <div>
//               <Nav />
//               <h2>Main component</h2>
//               {this.props.children}
//             </div>
//         );
//     }
//
// }

/*REFACTORING, USING ES6 ARROW FUNCTIONS*/

var Main = (props) => {
  return (
    <div>
      <Nav />
        <div class="row">
          <div class="columns medium-6 large-4 small-centered">
              {props.children}
          </div>
        </div>
      </div>
  );
};

module.exports = Main;
