(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('newlistCtrl', ['$scope', '$uibModalInstance', 'dashboardSvc', function newlistCtrl($scope, $uibModalInstance, dashboardSvc){
    
		$scope.listName = "";
		$scope.listDescription = "";

		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

	    $scope.createList = function () {
	    	dashboardSvc.createList($scope.listName, $scope.listDescription).then(function () {
	    		$uibModalInstance.close(true);
	    	});
	    }

	}]);
}());