'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngMessages',
  'ngAria',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});

  $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .dark();

}]);
