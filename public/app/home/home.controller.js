(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('homeCtrl', ['$scope', '$state', 'homeSvc', function homeCtrl($scope, $state, homeSvc){

		$scope.username = "";
		$scope.password = "";
		$scope.loginFailed = false;

		$scope.login = function () {
			homeSvc.login($scope.username, $scope.password).then(function (data) {
				if (data.status == 200) {
					$scope.loginFailed = false;
					$state.go("dashboard");
				} else {
					console.log("Login Failed");
					$scope.loginFailed = true;
				}
			});
		}

	}]);
}());