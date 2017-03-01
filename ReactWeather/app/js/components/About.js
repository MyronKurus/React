import React from 'react';

// export default class About extends React.Component {
//
//     render() {
//         return (
//             <div>
//               <h3>About component</h3>
//             </div>
//         );
//     }
//
// }

var About = () => {
  return (
      <div>
        <h3 class="text-center">About</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.</p>
        <p>Here are some of the tools, I used:</p>
        <ol>
          <li>
            <a href="https://facebook.github.io/react/">React</a>
             - This was JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org/">Open Weather Map</a>
             - I used Open Weather Map to search for weather data by city name.</li>
        </ol>
      </div>
  );
}

module.exports = About;
