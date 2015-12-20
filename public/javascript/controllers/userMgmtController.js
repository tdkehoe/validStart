app.controller("userMgmtController", ["$scope", "Auth",
function($scope, Auth) {

  $scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;

    Auth.$createUser({
      email: $scope.email,
      password: $scope.password
    }).then(function(userData) {
      $scope.message = "User created with uid: " + userData.uid;
      console.log("User created: " + $scope.email + ", " + $scope.password);
    }).catch(function(error) {
      $scope.error = error;
    });
  }; // close createUser

  $scope.removeUser = function() {
    $scope.message = null;
    $scope.error = null;

    Auth.$removeUser({
      email: $scope.email,
      password: $scope.password
    }).then(function() {
      $scope.message = "User removed";
    }).catch(function(error) {
      $scope.error = error;
    });
  }; // close removeUser

}]); // close controller
