import React  from 'react';
import Clock  from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      countDownStatus: 'stopped'
    }
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.countDownStatus !== prevState.countDownStatus) {
      switch (this.state.countDownStatus) {
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.setState({count: 0});

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }

  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          countDownStatus: 'stopped'
        });
      }

    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countDownStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({
      countDownStatus: newStatus
    });
  }

  render() {
    var {count, countDownStatus} = this.state;
    var renderControlArea = () => {
      if (countDownStatus !== 'stopped') {
        return <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    }
    return (
      <div>
        <h1 class="title">Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}
