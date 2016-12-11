(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('listCtrl', ['$scope', '$state', '$stateParams', 'listSvc', function listCtrl($scope, $state, $stateParams, listSvc){

		listSvc.openList($stateParams.list_id).then(function (data) {
			if (data.status == 200) {
				$scope.list_name = data.list_name;
				$scope.list_description = data.list_description;
				$scope.people = data.people;
				console.log("Data retrieved");
			}
		});

	}]);
}());