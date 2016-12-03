(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('homeSvc', ['$http', '$log', function homeSvc($http, $log) {

  	var login = function (username, password) {
  		var loginParams = {
  			username: username,
  			password: password
  		}
  		return $http.post("/api/login", loginParams).then(function (response) {
  			return response.data;
  		});
  	}

    return {
    	login: login
    };
  }]);

}());
