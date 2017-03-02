import React      from 'react';
import Todo       from 'Todo';

export default class TodoList extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    var {todos} = this.props;

    var renderTodos = () => {
      if (!todos.length) {
        return <p class="container__message">There is nothing to do!</p>
      }
      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    }

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};
