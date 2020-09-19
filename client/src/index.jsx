import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // post github username to server
    axios.post('/repos', {term: term})
    .then(res => {
      axios.get('/repos')
      .then(res => {
        // add repos to list
        this.setState({
          repos: res.data
        })
      })
    })
    .catch(err => {
      console.log(err);
      // throw err;
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));