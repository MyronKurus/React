import React      from 'react';
var moment = require('moment');

export default class Todo extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'

    var renderDate = () => {
      var message = 'Created '
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ H:mm');
    }

    return (
      <div class={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} onChange={()=>{this.props.onToggle(id);}}/>
        </div>
        <div>
          <p>{text}</p>
          <p class="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

};
