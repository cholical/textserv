(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('newMessageCtrl', ['$scope', '$uibModalInstance', 'dashboardSvc', 'list_id', function newMessageCtrl($scope, $uibModalInstance, dashboardSvc, list_id){
    	
		$scope.message_body = "";

		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

	    $scope.sendMessage = function () {
	    	dashboardSvc.sendMessage($scope.message_body, list_id).then(function (data) {
	    		if (data.status == 200) {
	    			$uibModalInstance.close(true);
	    		}
	    	});
	    }

	}]);
}());