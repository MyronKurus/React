import React      from 'react';

export default class AddTodo extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    if (text.trim().length) {
      this.refs.todoText.value = '';
      this.props.onSubmit(text);
    } else {
      this.refs.todoText.focus();
    }

  }

  render() {
    return (
      <div class="container__footer">
        <form onSubmit={this.handleSubmit} class="countdown-form">
          <input type="text" placeholder="Enter new todo..." ref="todoText"></input>
          <button class="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
};
