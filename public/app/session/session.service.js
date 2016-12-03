(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('sessionSvc', ['$http', '$log', '$cookies', function sessionSvc($http, $log, $cookies) {

  	var sessionUsername = undefined;
  	var sessionToken = undefined;

	var saveSession = function (username, token) {
		sessionUsername = username;
		sessionToken = token;
		var cookieValues = {
			username: username,
			token: token
		}
		var expiration = new Date();
		expiration.setFullYear(expiration.getFullYear() + 1);
		var cookieOptions = {
			expires: expiration
		};
		$cookies.put("credentials", cookieValues, cookieOptions);
		console.log("New Cookie Saved");
	}  	

    return {
    	sessionUsername: sessionUsername,
    	sessionToken: sessionToken,
    	saveSession: saveSession
    };

  }]);

}());
