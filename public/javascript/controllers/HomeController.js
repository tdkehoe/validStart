app.controller('HomeController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', 'Auth',
function($scope, $firebaseArray, $firebaseAuth, $location, Auth) {
  console.log("HomeController.");

  // Detect user state
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    console.log(authData);
    if (!authData) {
      console.log("Logged out for sure!");
    } else {
      console.log("Still logged in.");
    }
  })

  $scope.loginAnon = function() {
    console.log("Logging in.");
    // $scope.authData = null;
    // $scope.error = null;
    Auth.$authAnonymously()
    // .then(function(authData) {
    //   console.log("Authorizing.")
    //   $scope.authData = authData;
    //   console.log(authData);
    // })
    .catch(function(error) {
      // $scope.error = error;
      console.error(error);
    });
  }; // close loginAnon()

  $scope.loginGitHub = function() {
    Auth.$authWithOAuthPopup("github")
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.loginFacebook = function() {
    Auth.$authWithOAuthPopup("facebook")
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.logout = function() {
    Auth.$unauth();
    console.log("Logged out.");
  };

}]);
