(function () {
	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('dashboardCtrl', ['$scope', '$state', 'dashboardSvc', function dashboardCtrl($scope, $state, dashboardSvc) {

		dashboardSvc.getDashboard().then(function (data) {
			if (data.status == 200) {
				$scope.lists = data.lists;
			}
		});



	}]);
}());