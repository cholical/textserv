(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('newMessageCtrl', ['$scope', '$uibModalInstance', 'dashboardSvc', function newlistCtrl($scope, $uibModalInstance, dashboardSvc){
		console.log("in new message beg");
    
		$scope.message_body = "";

		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

		console.log("in new message pt 2");

	    $scope.sendMessage = function () {
	    	dashboardSvc.sendMessage($scope.message_body).then(function () {
	    		$uibModalInstance.close(true);
	    	});
	    }

	}]);
}());