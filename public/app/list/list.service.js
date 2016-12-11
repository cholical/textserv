(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('listSvc', ['$http', '$log', function listSvc($http, $log) {

  	var openList = function (list_id) {
  		var params = {
  			list_id: list_id
  		}
  		return $http.post("/api/openList", params).then(function (response) {
  			return response.data;
  		});
  	}

  	var savePerson = function (list_id, first_name, last_name, number) {
  		var params = {
  			list_id: list_id,
  			first_name: first_name,
  			last_name: last_name,
  			number: number
  		}
  		return $http.post("/api/addPerson", params).then(function (response) {
  			return response.data;
  		});
  	}

  	var deletePerson = function (person_id) {
  		var params = {
  			person_id: person_id
  		}
  		return $http.post("/api/deletePerson", params).then(function (response) {
  			return response.data;
  		});
  	}

    return {
    	openList: openList,
    	savePerson: savePerson,
    	deletePerson: deletePerson
    };
  }]);

}());
