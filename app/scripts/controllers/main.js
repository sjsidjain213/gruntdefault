'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos4');

    $scope.todos4 = todosInStore || [];

    $scope.$watch('todos4', function () {
      localStorageService.set('todos4', $scope.todos4);
    }, true);

    $scope.addTodo = function () {
      $scope.todos4.push("name : "+$scope.todo5+", Designation : "+$scope.dsg+", remark : "+$scope.remark);
      $scope.todo5 = '';
$scope.dsg='';
$scope.remark='';
    };

    $scope.removeTodo = function (index) {
      $scope.todos4.splice(index, 1);
    };

  });