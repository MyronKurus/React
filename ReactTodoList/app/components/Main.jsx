import React      from 'react';
import TodoList   from 'TodoList';
import AddTodo    from 'AddTodo';
import TodoSearch from 'TodoSearch';

var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

export default class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    var newTodos = this.state.todos;
    var newItem = {
      id: uuid(),
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined
    };
    newTodos.push(newItem);
    this.setState({
      todos: newTodos
    });
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  handleToggle(id) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1>Todo App</h1>
        <div class="row">
          <div class="column small-centered medium-6 large-4">
            <div class="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onSubmit={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


/*

[
  {
    id: uuid(),
    text: 'Walk the dog',
    completed: false
  },
  {
    id: uuid(),
    text: 'Clean the yard',
    completed: true
  },
  {
    id: uuid(),
    text: 'Go shopping',
    completed: true
  },
  {
    id: uuid(),
    text: 'Wash the car',
    completed: false
  }
]


*/
