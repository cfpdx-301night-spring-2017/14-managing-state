'use strict';

(function(module) {
  const aboutController = {};

  // XCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (1.Hides other sections. 2.Get repos. 3.show repo index. It is called from the routes on the about/URL. It calls requesrRepos in repos.js and repoView index in repoview.js)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
