(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());

  // XCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live? (1.Get the count of words for each author. 2. update the blog-statsarticle count. 3. then updates the blog-stats word count (for all aricles) It calls Handlebars.compile function, Article.numWordsByAuthor and Article.numWordsAll functions.)
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(window);
