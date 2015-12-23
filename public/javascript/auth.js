// Authenticating Users
var ref = new Firebase("https://validstart.firebaseio.com/");
ref.authWithPassword({
  email: "linus@peanuts.com",
  password: "correcthorsebatterystaple"
}, function(error, authData) {
  // User authenticated
});

$scope.authObj.$authWithPassword({
  email: "linus@peanuts.com",
  password: "correcthorsebatterystaple"
}).then(function(authData) {
  // User authenticated
}).catch(function(error) {
  // Authentication error
});


// Detecting Auth State
var ref = new Firebase("https://validstart.firebaseio.com/");
ref.onAuth(function(authData) {
  if (authData) {
    // User logged in
  } else {
    // User logged out
  }
})

$scope.authObj.$onAuth(function(authData){
  if (authData) {
    // User logged in
  }else {
    // User logged out
  }
});


// Creating Users
var ref = new Firebase("https://validstart.firebaseio.com/");
ref.createUser({
  email: "linus@peanuts.com",
  password: "correcthorsebatterystaple"
}, function(error, authData) {
  // User created
});

$scope.authObj.$createUser({
  email: "linus@peanuts.com",
  password: "correcthorsebatterystaple"
}).then(function(userData) {
  // User authenticated
}).catch(function(error) {
  // Authentication error
});
