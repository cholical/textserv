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

    return {
    	openList: openList
    };
  }]);

}());
