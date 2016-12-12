(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('messagesCtrl', ['$scope', '$state', 'messagesSvc', 'dashboardSvc', 'sessionSvc', function messagesCtrl($scope, $state, messagesSvc, dashboardSvc, sessionSvc){
		
		messagesSvc.getMessages().then(function (data) {
			if (data.status == 200) {
				$scope.messages = data.messages; 
				console.log("Message Data retrieved");
			}
		});

		$scope.logout = function () {
			dashboardSvc.logout().then(function (data) {
				if (data.status == 200) {
					sessionSvc.logout();
					$state.go('home');
				}
			});
		}

	}]);
}());


