app.controller('ShowController', ['$scope', '$firebaseObject',
function($scope, $firebaseObject) {
  var ref = new Firebase("https://validstart.firebaseio.com/"); // connect to Firebase
  var key = location.hash.split('#/')[1]; // parse $id from URL query string
  var refKey = ref.child(key); // locates the child element by the $id
  var project = $firebaseObject(refKey); // gets the object from Firebase
  project.$bindTo($scope, "project").then(function() {

    $scope.upLike = function() {
      $scope.project.likes += 1;
    };

    $scope.downLike = function() {
      $scope.project.likes -= 1;
    };

    $scope.addComment = function(newComment){ // NEW
      var comment = {
        commentText: newComment.commentText,
        commentAuthor: newComment.commentAuthor,
        commentTimestamp: Date.now(),
      };
      if (!$scope.myIdea.comments) { // if there are no comments
        var comments = [];
        comments.push(comment);
        myIdea.comments = comments;
        myIdea.$save().then(function(ref) {
          console.log("Saved.")
          // ref.key() === obj.$id; // true
        }, function(error) {
          console.log("Error:", error);
        });
      } else { // if comments array already exists
        $scope.myIdea.comments.push(comment);
      }
    }; // close addComment

    $scope.deleteComment = function(myIdea, comment) { // DESTROY
      var index = myIdea.comments.indexOf(comment);
      myIdea.comments.splice(index, 1);
    }; // close deleteComment

    $scope.setScale = function(scale) {
      console.log(scale);
      $scope.myIdea.scale = scale;
    };
  }); // close $bindto
}]); // close controller
