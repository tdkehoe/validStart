app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("http;//docs-sandbox.firebaseio.com");
  console.log("Auth factory!");
  return $firebaseAuth(ref);
});
