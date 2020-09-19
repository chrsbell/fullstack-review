const axios = require('axios');
const config = require('../config.js');
const _ = require('underscore');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log(`Username: ${username}`);

  let options = {
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // return data as a Promise
  return axios(options)
  .then(res => {
    // can access JSON data from data key of res
    filtered = _.map(res.data, (repo) => {
      // filter necessary data from repo list
      repo = _.pick(repo, 'id', 'name', 'html_url', 'owner', 'stargazers_count', 'watchers_count')
      // owner is normally an object so change it to just the username
      repo.owner = username;
      return repo;
    });
    return filtered;

  })
  .catch(err => {
    console.log(`Couldn't complete request!`);
  })

}

module.exports.getReposByUsername = getReposByUsername;