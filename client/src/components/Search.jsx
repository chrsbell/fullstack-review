import React from 'react';

class Search extends React.Component {
  constructor({onSearch}) {
    super();
    this.state = {
      term: ''
    }
    // reference to app's search method
    this.onSearch = onSearch;
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  // search using the value from input field
  search() {
    this.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>)
  }
}

export default Search;