'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // XCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live? ( makes the api call to sever.js and return the data to repos.all array. It is used in aboutController.index in aboutController.js)
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
