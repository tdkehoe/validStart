var app = angular.module('ValidStartApp', ['ngRoute', 'firebase']);

app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    // test for current route
    if(current.$$route) {
      // Set current page title
      $rootScope.title = current.$$route.title;
    }
  });
}]);
