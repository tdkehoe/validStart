app.controller('ProjectListController', ['$scope', '$firebaseArray', '$firebaseAuth', '$firebaseObject', '$location',
function($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $location) {
  console.log("ProjectListController.");

  var ref = new Firebase("https://validstart.firebaseio.com/");
  $scope.projects = $firebaseArray(ref);

  $scope.deleteProject = function(project) { // DESTROY
    var key = project.$id; // parse $id from URL query string
    var refKey = ref.child(key); // locates the child element by the $id
    var obj = $firebaseObject(refKey); // gets the object from Firebase
    obj.$remove().then(function(ref) {
      // data has been deleted locally and in the database
      console.log("Deleted.");
    }, function(error) {
      console.log("Error:", error);
    });
  };

}]);
