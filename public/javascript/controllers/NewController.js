app.controller('NewController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location',
function($scope, $firebaseArray, $firebaseAuth, $location) {
  console.log("NewController.");
  // set up Firebase
  var ref = new Firebase("https://validstart.firebaseio.com/");
  $scope.projects = $firebaseArray(ref);
  // var auth = $firebaseAuth(ref);

  $scope.addProject = function(){ // NEW
    console.log("Adding project.");
    console.log($scope.project.creatorName);
    console.log($scope.project.projectName);
    var project = {
      creatorName:  $scope.project.creatorName,
      projectName: $scope.project.projectName,
      likes: 0
    };
    console.log(project);
    $scope.projects.$add(project).then(function(ref){
      var id = ref.key();
      console.log("added record with id " + id);
      $location.path( "/projectlist" );
    });
  };

}]);
