var hackApp = angular.module('hackApp', ['ngRoute']);
// configure our routes
hackApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
      .when('/dashboard', {
          templateUrl : 'dashboard/dashboard.html',
          controller  : 'dashboardController'
      });
});
