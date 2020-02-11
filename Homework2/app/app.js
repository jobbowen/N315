function initNav() {
  $('a').click(function(e) {
    var cp = PROVIDER.getCurrentPageName();
    JOEY_UTILITY.trace('initNav ', cp);
    var btnID = e.currentTarget.id;
    if (cp != btnID) {
      loadContent(btnID);
    }
  });
}

function loadContent(pageName) {
  var pageContent = PROVIDER.getPageContent(pageName);
  JOEY_UTILITY.trace('app.js line 14', pageContent);
  $('.content').html(pageContent);

  initNav();
}

function populateNav() {
  var nav = PROVIDER.getMainNav();

  $.each(nav, function(idx, link) {
    // $('nav').append('<a href="' + link.path + '">' + link.linkName + '</a>');
    $('nav').append(`<a class="navElements" id="${link.path}" href="#">${link.linkName}</a>`);
  });

  // $('nav').append(`<a class="navElements" id="insta" href="https://www.instagram.com/">Instagram</a>`);

  loadContent('home');
}

function dataIsLoaded() {
  populateNav();
}

$(document).ready(function() {
  PROVIDER.getData(dataIsLoaded);
});
