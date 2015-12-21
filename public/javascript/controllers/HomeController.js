app.controller('HomeController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location',
function($scope, $firebaseArray, $firebaseAuth, $location) {
  console.log("HomeController.");

  var ref = new Firebase("https://validstart.firebaseio.com/");
  var auth = $firebaseAuth(ref);

  $scope.login = function() {
    console.log("Logging in.");
    $scope.authData = null;
    $scope.error = null;
    auth.$authAnonymously().then(function(authData) {
      console.log("Authorizing.")
      $scope.authData = authData;
      console.log(authData);
    }).catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }; // close login()

}]);
