var mapApp = angular.module('mapApp', ['ngRoute','ngAnimate', 'ngResource', 'ngCookies', 'ngMaterial']);

mapApp.config(['$routeProvider',
function($routeProvider) {

  $routeProvider.

  when('/menu', {
    templateUrl: 'menu.html',
    controller: 'MapCtrl'
  }).

  when('/specific/:itemId', {
    templateUrl: 'partials/specificInfo.html',
    controller: 'SpecificCtrl'
  }).

  when('/trail', {
    templateUrl: 'trail.html',
    controller: ''
  }).

  when('/Dome2', {
    templateUrl: 'partials/Dome2.html'
  }).

  when('/Dome3', {
    templateUrl: 'partials/Dome3.html'
  }).

  when('/Dome4', {
    templateUrl: 'partials/Dome4.html'
  }).

  when('/Dome5', {
    templateUrl: 'partials/Dome5.html'
  }).

  when('/Dome6', {
    templateUrl: 'partials/Dome6.html'
  }).

  otherwise({
    redirectTo: '/menu'
  });
}]);
