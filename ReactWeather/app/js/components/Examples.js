import React from 'react';
import {Link} from 'react-router';

// export default class Examples extends React.Component {
//
//     render() {
//         return (
//             <div>
//               <h1 class="text-center">Examples</h1>
//               <p>Here are a few example locations to try out:</p>
//               <ol>
//                 <li>
//                   <Link to="/?location=Lviv">Lviv, UA</Link>
//                 </li>
//                 <li>
//                   <Link to="/?location=Rio">Rio, Brazil</Link>
//                 </li>
//               </ol>
//             </div>
//         );
//     }
//
// }

var Examples = () => {
  return (
      <div>
        <h1 class="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Lviv">Lviv, UA</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
  );
}

module.exports = Examples;
