(function () {
	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('dashboardCtrl', ['$scope', '$state', 'dashboardSvc', '$uibModal', 'sessionSvc', function dashboardCtrl($scope, $state, dashboardSvc, $uibModal, sessionSvc) {

		dashboardSvc.getDashboard().then(function (data) {
			if (data.status == 200) {
				$scope.lists = data.lists;
			}
		});

		$scope.openList = function (list_id) {
			$state.go('list', {
				list_id: list_id
			});
		}

		$scope.createList = function () {
			var modalInstance = $uibModal.open({
		        templateUrl: 'app/newlist/newlist.html',
		        controller: 'newlistCtrl',
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

		$scope.deleteList = function (list_id) {
			dashboardSvc.deleteList(list_id).then(function (data) {
				dashboardSvc.getDashboard().then(function (data) {
					if (data.status == 200) {
						$scope.lists = data.lists;
					}
				});
			});
		}

		$scope.logout = function () {
			dashboardSvc.logout().then(function (data) {
				if (data.status == 200) {
					sessionSvc.logout();
					$state.go('home');
				}
			});
		}

		//###
		$scope.sendMessage = function (list_id) { //need implemented 
			console.log("check in controller")
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