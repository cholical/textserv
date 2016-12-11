(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('newMessageCtrl', ['$scope', '$uibModalInstance', 'dashboardSvc', function newMessageCtrl($scope, $uibModalInstance, dashboardSvc){
    	
		$scope.message_body = "";

		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

	    $scope.sendMessage = function () {
	    	dashboardSvc.sendMessage($scope.message_body).then(function () {
	    		$uibModalInstance.close(true);
	    	});
	    }

	}]);
}());