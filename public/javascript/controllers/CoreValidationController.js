app.controller('CoreValidationController', ['$scope', '$firebaseObject',
function($scope, $firebaseObject) {
  console.log("CoreValidationController.");
  var ref = new Firebase("https://validstart.firebaseio.com/"); // connect to Firebase
  var key = location.hash.split('#/')[1]; // parse $id from URL query string
  var ref = ref.child(key); // locates the child element by the $id
  var project = $firebaseObject(ref); // gets the object from Firebase
  project.$bindTo($scope, "project").then(function() {

    $scope.addTargetCustomer = function(newTargetCustomer){ // NEW
      console.log(newTargetCustomer);
      console.log(newTargetCustomer.definition);
      console.log(newTargetCustomer.knowsCustomer);
      var targetCustomer = {
        definition: newTargetCustomer.definition,
        knowsCustomer: newTargetCustomer.knowsCustomer,
      };
      if (!$scope.project.targetCustomers) { // if there are no comments
        var targetCustomers = [];
        targetCustomers.push(targetCustomer);
        project.targetCustomers = targetCustomers;
        project.$save().then(function(ref) {
          console.log("Saved.")
          // ref.key() === obj.$id; // true
        }, function(error) {
          console.log("Error:", error);
        });
      } else { // if comments array already exists
        $scope.project.targetCustomers.push(targetCustomer);
      }
    }; // close addComment

    $scope.deleteTargetCustomer = function(project, targetCustomer) { // DESTROY
      var index = project.targetCustomers.indexOf(targetCustomer);
      project.targetCustomers.splice(index, 1);
    }; // close deleteComment

  }); // close $bindTo

}]); // close controller