app.controller('CoreValidationController', ['$scope', '$firebaseObject',
function($scope, $firebaseObject) {
  console.log("CoreValidationController.");

  var ref = new Firebase("https://validstart.firebaseio.com/"); // connect to Firebase
  var key = location.hash.split('#/')[1]; // parse $id from URL query string
  var newKey = key.split('/');
  var itemRef = ref.child(newKey[0]); // locates the child element by the $id
  var project = $firebaseObject(itemRef); // gets the object from Firebase
  
  console.log(itemRef.child('targetCustomer1').child('targetCustomerDefinition').toString());
  $firebaseObject(itemRef.child('targetCustomer1').child('targetCustomerDefinition')).$watch(function() {
    console.log("Saved!"); // logs when the value of one property is changed and saved
  })

  project.$bindTo($scope, "project").then(function() {

    var evaluationScore = 0;
    var externalEvaluation = 0;
    console.log(evaluationScore);
    console.log(externalEvaluation);

    $scope.defineTargetCustomer = function(newTargetCustomer){ // NEW
      console.log("Adding target customer.");
      console.log(newTargetCustomer);
      console.log(newTargetCustomer.definition);
      console.log(newTargetCustomer.isCustomer);
      console.log(newTargetCustomer.knowsCustomer);
      var targetCustomer = {
        definition: newTargetCustomer.definition,
        isCustomer: newTargetCustomer.isCustomer,
        knowsCustomer: newTargetCustomer.knowsCustomer,
        doTheyPayText: "Not answered."
      };
      if (!$scope.project.targetCustomers) { // if there are no comments
        var targetCustomers = [];
        targetCustomers.push(targetCustomer);
        project.targetCustomers = targetCustomers;
        project.$save().then(function(ref) {
          console.log("Saved.")
          console.log(project.targetCustomers);
          // ref.key() === obj.$id; // true
        }, function(error) {
          console.log("Error:", error);
        });
      } else { // if comments array already exists
        $scope.project.targetCustomers.push(targetCustomer);
      }
    }; // close defineTargetCustomer

    $scope.doTheyPay = function(doTheyPaydata){ // NEW
      console.log("Adding payment answer.");
      console.log(doTheyPaydata);
      // console.log(doTheyPaydata);
      // console.log(doTheyPaydata.doTheyPayText);
      // console.log(doTheyPaydata.doTheyPayValue);
      // var doTheyPay = {
      //   doTheyPayText: doTheyPay.doTheyPayText,
      //   doTheyPayValue: doTheyPay.doTheyPayValue,
      // };
      // $scope.project.targetCustomers.push(doTheyPay);
    }; // close doTheyPay

    $scope.deleteTargetCustomer = function(project, targetCustomer) { // DESTROY
      var index = project.targetCustomers.indexOf(targetCustomer);
      project.targetCustomers.splice(index, 1);
    }; // close deleteComment

  }); // close $bindTo

}]); // close controller
