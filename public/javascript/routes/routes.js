app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController',
    title: 'ValidStart'
  })
  .when('/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'javascript/templates/new.html', // NEW
    controller: 'NewController',
    title: 'Add New Project'
  })
  .when('/projectlist', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'javascript/templates/projectlist.html', // NEW
    controller: 'ProjectListController',
    title: 'Project List'
  })
  .when('/:id/corevalidation', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'javascript/templates/corevalidation.html', // NEW
    controller: 'CoreValidationController',
    title: 'Core Validation'
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
  .otherwise({ redirectTo: '/' });
});
