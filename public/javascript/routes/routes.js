app.run(["$rootScope", "$location", function($rootScope, $location){
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise isn rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
    }
  });
}]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when('/home', { // login page
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController',
    title: 'ValidStart',
    resolve: {
      // controller will not be loaded until $waitForAuth resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": ["Auth", function(Auth) {
        // $waitForAuth returns a promise so the resolve waits for it to complete
        return Auth.$waitForAuth();
      }]
    }
  })
  // .when('/account', { // user's account page
  //   templateUrl: 'javascript/templates/account.html',
  //   controller: 'AccountController',
  //   title: 'ValidStart',
  //   resolve: {
  //     // controller will not be loaded until $waitForAuth resolves
  //     // Auth refers to our $firebaseAuth wrapper in the example above
  //     "currentAuth": ["Auth"], function(Auth) {
  //       // $waitForAuth returns a promise so the resolve waits for it to complete
  //       return Auth.$waitForAuth();
  //     }
  //   }
  // })

  .when('/userMgmt', { // must be above '/:id' otherwise it'll think that the ID is 'new'
  templateUrl: 'javascript/templates/userMgmt.html', // NEW
  controller: 'userMgmtController',
  title: 'User Management'
})
.when('/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
templateUrl: 'javascript/templates/new.html', // NEW
controller: 'NewController',
title: 'Add New Project',
resolve: {
  "currentAuth": ["Auth", function(Auth) {
    console.log("Resolving authorization.");
    return Auth.$requireAuth();
    }] // close "currentAuth"
  } // close resolve
})
.when('/projectlist', { // must be above '/:id' otherwise it'll think that the ID is 'new'
templateUrl: 'javascript/templates/projectlist.html', // NEW
controller: 'ProjectListController',
title: 'Project List',
resolve: {
  // controller will not be loaded until $waitForAuth resolves
  // Auth refers to our $firebaseAuth wrapper in the example above
  "currentAuth": ["Auth", function(Auth) {
    // $requireAuth returns a promise so the resolve waits for it to complete
    // If the promise is rejected, it will throw a $stateChangeError (see above)
    console.log("Resolving authorization.");
    return Auth.$requireAuth();
  }] // close "currentAuth"
} // close resolve
})
.when('/:id/corevalidation', { // must be above '/:id' otherwise it'll think that the ID is 'new'
templateUrl: 'javascript/templates/corevalidation.html', // NEW
controller: 'CoreValidationController',
title: 'Core Validation',
resolve: {
  "currentAuth": ["Auth", function(Auth) {
    console.log("Resolving authorization.");
    return Auth.$requireAuth();
    }] // close "currentAuth"
  } // close resolve
})
.when('/:id/edit', { // UPDATE
  templateUrl: 'javascript/templates/edit.html',
  controller: 'EditController',
  title: 'Edit Project'
})
.when('/:id', { // SHOW
  templateUrl: 'javascript/templates/show.html',
  controller: 'ShowController',
  title: 'Show Project'
})
.otherwise({ redirectTo: '/home' });
}]);
