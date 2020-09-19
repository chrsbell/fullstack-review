import React from 'react';

let RepoList = ({ repos }) => {
  // console.log(repos);
  if (!repos.length) {
    return null;
  } else {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Repo Name</th>
            <th>URL</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Watchers</th>
          </tr>
            {repos.map((repo, i) => {
              // give each field a unique key
              let numKeys = 6;
              return (
              <tr key={i*numKeys}>
                <td key={(i*numKeys)+1}>{repo.name}</td>
                <td key={(i*numKeys)+2}>{repo.html_url}</td>
                <td key={(i*numKeys)+3}>{repo.owner}</td>
                <td key={(i*numKeys)+4}>{repo.stargazers_count}</td>
                <td key={(i*numKeys)+5}>{repo.watchers_count}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default RepoList;