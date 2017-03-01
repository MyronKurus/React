import React from 'react';

// export default class WeatherMessage extends React.Component {
//
//     constructor(props) {
//       super(props);
//     }
//
//     render() {
//         var {temp, location} = this.props;
//         return (
//             <div>
//               <h4>It is {temp} in {location}</h4>
//             </div>
//         );
//     }
// }

/*REFACTORING, USING ES6 ARROW FUNCTIONS*/

var Message = ({temp, location}) => {
    return (
      <div>
        <h4>It is {temp} in {location}</h4>
      </div>
    );
};

module.exports = Message;
