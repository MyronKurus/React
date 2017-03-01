import React          from 'react';

import WeatherForm    from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal     from './ErrorModal';

var openWeatherMap = require('../api/openWeatherMap');

export default class Weather extends React.Component {

    constructor(){
      super();
      this.state = {
        isLoading: false,
        location: undefined,
        temp: undefined,
        errorMessage: undefined
      }
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {

      var scope = this;

      this.setState({isLoading: true});

      openWeatherMap.getTemp(location).then(function (temp) {

        setTimeout(function(){
          scope.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
        }, 500);
      }, function (error) {
        scope.setState({
          isLoading: false,
          errorMessage: error.message
        })
        console.log(error.message);
      });

    }

    componentDidMount() {
      var location = this.props.location.query.location;

      if (location && location.trim().length) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    }

    componentWillReceiveProps(newProps) {
      var location = newProps.location.query.location;

      if (location && location.trim().length) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    }

    render() {

        var {isLoading, temp, location, errorMessage} = this.state;

        var renderMessage = function(){
          if (isLoading) {
            return <h3>Fetching weather</h3>
          } else if (temp && location) {
            return <WeatherMessage temp={temp} location={location}/>
          }
        }

        var renderError = function() {
          if(typeof errorMessage === 'string') {
            return (
              <ErrorModal message={errorMessage}/>
            );
          }
        }

        return (
            <div>
              <h1 class="text-center page-title">Get Weather</h1>
              <WeatherForm onSearch={this.handleSearch.bind(this)}/>
              {renderMessage()}
              {renderError()}
            </div>
        );
    }

}
