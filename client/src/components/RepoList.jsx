import React from 'react';

let RepoList = ({repos}) => {
  console.log(repos);
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {repos.length} repos.
    </div>
  );
};

export default RepoList;