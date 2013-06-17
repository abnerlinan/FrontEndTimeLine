// Code goes here

var App = angular.module('App', []);

App.controller('DataCtrl', function($scope, $http) {
  $http.get('data.json')
  .then(function(res){
    $scope.data = res.data;
  });
});