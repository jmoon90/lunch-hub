'use strict';

angular.module('lunchHubApp')
  .controller("GroupsCtrl", ['$scope', 'Group', function($scope, Group) {
    $scope.groups = Group.query();
  }]);
