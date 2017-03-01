import React from 'react';

export default class WeatherForm extends React.Component {

    constructor(props){
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {

      e.preventDefault();

      var location = this.refs.location.value;

      if (location.trim().length > 0) {
        this.refs.location.value = '';
        this.props.onSearch(location);
      }

    }

    render() {
        return (
            <div>
              <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Enter city name"/>
                <button class="button expanded hollow">Get Weather</button>
              </form>
            </div>
        );
    }

}
