(function() {
  angular.module("hackApp").controller("MainController", ["$rootScope", MainController]);
  function MainController($rootScope) {
    $rootScope.test = "hello jeya";
  };
})();
