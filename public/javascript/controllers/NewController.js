app.controller('NewController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', 'Auth',
function($scope, $firebaseArray, $firebaseAuth, $location, Auth) {
  console.log("NewController.");
  // set up Firebase
  var ref = new Firebase("https://validstart.firebaseio.com/");
  $scope.projects = $firebaseArray(ref);
  // var auth = $firebaseAuth(ref);

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

  $scope.addProject = function(){ // NEW
    Auth.$onAuth(function(authData) {
      $scope.authData = authData;
      var project = {
        creatorName:  authData.github.displayName,
        projectName: $scope.project.projectName,
        likes: 0
      };
      $scope.projects.$add(project).then(function(ref){
        var id = ref.key();
        console.log("added record with id " + id);
        $location.path( "/projectlist" );
      });
    })
  }; // close addProject

}]);
