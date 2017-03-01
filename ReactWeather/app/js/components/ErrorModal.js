import React from 'react';

export default class ErrorModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Oops!',
      message: this.props.message
    }
  }

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  }

  componentDidMount () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    var { title, message } = this.state;
    return (
      <div id="error-modal" class="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button class="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }

}
