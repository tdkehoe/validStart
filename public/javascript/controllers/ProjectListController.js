app.controller('ProjectListController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location',
function($scope, $firebaseArray, $firebaseAuth, $location) {
  console.log("NewController.");
  // set up Firebase
  var ref = new Firebase("https://validstart.firebaseio.com/");
  $scope.projects = $firebaseArray(ref);
  // var auth = $firebaseAuth(ref);

  $scope.addIdea = function(){ // NEW
    console.log("Adding idea.");
    var idea = {
      creatorName:  $scope.project.creatorName,
      projectName: $scope.project.projectName,
      score: $scope.project.score,
      definitions: $scope.project.definitions,
      market: $scope.project.market,
      team: $scope.project.team,
      plan: $scope.project.plan,
      likes: 0,
      comments: [null]
    };
    $scope.projects.$add(project).then(function(ref){
      var id = ref.key();
      console.log("added record with id " + id);
      $location.path( "/" );
    });
  };

}]);
