(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('messagesCtrl', ['$scope', '$state', 'messagesSvc', function messagesCtrl($scope, $state,messagesSvc){
		
		messagesSvc.getMessages().then(function (data) {
			if (data.status == 200) {
				$scope.messages = data.messages; 
				console.log("Message Data retrieved");
			}
		});


	}]);
}());


