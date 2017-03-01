import React  from 'react';

export default class Controls extends React.Component {

  constructor(props){
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  static propTypes = {
    countDownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    var {countDownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countDownStatus === 'started') {
        return <button class="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countDownStatus === 'paused') {
        return <button class="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }
    return (
      <div class="controls">
        {renderStartStopButton()}
        <button class="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}
