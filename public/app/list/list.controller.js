(function () {

	'use strict';
	var app;

	app = angular.module('textserv');
	app.controller('listCtrl', ['$scope', '$state', '$stateParams', 'listSvc', function listCtrl($scope, $state, $stateParams, listSvc){

		listSvc.openList($stateParams.list_id).then(function (data) {
			if (data.status == 200) {
				$scope.list_name = data.list_name;
				$scope.list_description = data.list_description;
				$scope.people = data.people;
				console.log("Data retrieved");
			}
		});

		$scope.addPerson = function () {
			$scope.people.unshift({
				first_name: "",
				last_name: "",
				number: "",
				unsaved: true
			});
		}

		$scope.savePerson = function (first_name, last_name, number) {
			listSvc.savePerson($stateParams.list_id, first_name, last_name, number).then(function (data) {
				if (data.status == 200) {
					listSvc.openList($stateParams.list_id).then(function (data) {
						if (data.status == 200) {
							$scope.list_name = data.list_name;
							$scope.list_description = data.list_description;
							$scope.people = data.people;
							console.log("Data retrieved");
						}
					});
				}
			});
		}

		$scope.deletePerson = function (person_id) {
			listSvc.deletePerson(person_id).then(function (data) {
				if (data.status == 200) {
					listSvc.openList($stateParams.list_id).then(function (data) {
						if (data.status == 200) {
							$scope.list_name = data.list_name;
							$scope.list_description = data.list_description;
							$scope.people = data.people;
							console.log("Data retrieved");
						}
					});
				}
			})
		}

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