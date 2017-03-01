import React  from 'react';

export default class CountdownForm extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault;
    var strSeconds = this.refs.seconds.value.trim();
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit} class="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds..."/>
          <button class="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
