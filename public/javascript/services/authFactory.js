app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("http;//docs-sandbox.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);
