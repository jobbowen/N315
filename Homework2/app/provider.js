var PROVIDER = (function() {
  var _allData = {};
  var _currentPage = '';

  var _getData = function(callback) {
    $.getJSON('data/data.json', function(data) {
      // this is when it is complete
      // console.log('success ', data);
    })
      .fail(function(error) {
        //   console.log('Whoops ', error.status + ' ' + error.statusText);
      })
      .done(function(data) {
        _allData = data;
        callback();
        // populateNav(data.MainNav);
      });
  };

  var _getMainNav = function() {
    return _allData.Nav;
  };

  var _getPageContent = function(nameOfPage) {
    var content = '';
    $.each(_allData.Pages, function(idx, page) {
      if (nameOfPage === page.pageName) {
        content = page.content;
        _currentPage = page.pageName;
      }
    });
    return content;
  };

  var _getCurrentPageName = function() {
    return _currentPage;
  };

  return {
    getData: _getData,
    getMainNav: _getMainNav,
    getPageContent: _getPageContent,
    getCurrentPageName: _getCurrentPageName
  };
})();
