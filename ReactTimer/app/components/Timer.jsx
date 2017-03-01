import React  from "react";
import Clock  from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      countDownStatus: 'stopped'
    }
    this.startTimer = this.startTimer.bind(this);
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

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  handleStatusChange(newStatus) {
    this.setState({
      countDownStatus: newStatus
    });
  }

  render() {

    var {count, countDownStatus} = this.state;

    var renderControlArea = () => {
      if (countDownStatus !== 'started') {
        return <Controls countDownStatus={'paused'} onStatusChange={this.handleStatusChange} />
      } else {
        return <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
      }
    }

    return (
      <div>
        <h1 class="title">Timer</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}
