(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('messagesCtrl', ['$scope', '$state', 'messageSvc', function messagesCtrl($scope, $state,messageSvc){
		
		messageSvc.getMessages().then(function (data) {
			if (data.status == 200) {
				$scope.messages = data.messages; //need verify 
			}
		});

		$scope.message_body = "";

		$scope.sendMessage = function (list_id) { //need implemented 
			var modalInstance = $uibModal.open({
		        templateUrl: 'app/newMessage/newMessage.html',
		        controller: 'newMessageCtrl',
		        size: 'md'
		    });

		     modalInstance.result.then(function (success) {
		    	if (success) {
		    		dashboardSvc.getDashboard().then(function (data) {
						if (data.status == 200) {
							$scope.lists = data.lists;
						}
					});
		    	}
		    });
		}







	}]);
}());


