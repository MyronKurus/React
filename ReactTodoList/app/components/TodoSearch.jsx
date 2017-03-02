import React      from 'react';

export default class TodoSearch extends React.Component {

  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {

    return (
      <div class="container__header">
        <div>
          <input type="text" placeholder="Search todos" ref="searchText" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
             Show completed todos</label>
        </div>
      </div>
    );
  }
};
