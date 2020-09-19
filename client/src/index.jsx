import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.updateRepos();
  }

  // gets top 25 repo list from server
  updateRepos() {
    axios.get('/repos')
    .then(res => {
      console.log('Completed GET request');
      // add repos to list
      this.setState({
        repos: res.data
      });
      console.log(res);
    });
  }

  // sends query to server which in turn updates its database with the repos
  // belonging to the respective user, if there are any
  search (term) {
    console.log(`${term} was searched`);
    // post github username to server
    axios.post('/repos', {term: term})
    .then(res => {
      console.log('Completed POST request');
      this.updateRepos();
    })
    .catch(err => {
      console.log(err);
      // throw err;
    })
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));