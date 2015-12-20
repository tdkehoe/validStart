app.controller('HomeController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location',
function($scope, $firebaseArray, $firebaseAuth, $location) {
  console.log("ProjectListController.");
  // set up Firebase
  var ref = new Firebase("https://validstart.firebaseio.com/");
  $scope.projects = $firebaseArray(ref);
  // var auth = $firebaseAuth(ref);

  // needs to show that data is loading

  $scope.deleteProject = function(project) { // DESTROY
    console.log("Deleting project.");
    $scope.projects.$remove(project).then(function() {
      console.log("Project deleted.")
    });
  };

}]);
