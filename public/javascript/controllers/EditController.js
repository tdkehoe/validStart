app.controller('EditController', ["$scope", '$firebaseObject',
function($scope, $firebaseObject){
  console.log("EditController");
  var ref = new Firebase("https://validstart.firebaseio.com/"); // connect to Firebase
  var key = location.hash.split('#/')[1]; // parse $id from URL query string
  var newKey = key.split('/');
  var itemRef = ref.child(newKey[0]); // locates the child element by the $id
  var myIdea = $firebaseObject(itemRef); // gets the object from Firebase
  myIdea.$bindTo($scope, "myIdea").then(function() {

    $scope.updateIdea = function(update) {
      console.log("Updating idea.");
      if (update.creatorName) {
        $scope.myIdea.creatorName = update.creatorName;
      }
      else {
        console.log("creatorName not updated.");
      }
      if (update.ideaTitle) {
        $scope.myIdea.ideaTitle = update.ideaTitle;
      }
      else {
        console.log("ideaTitle not updated.");
      }
    }; // close updateIdea
  }); // close $bindTo
}]); // close controller
