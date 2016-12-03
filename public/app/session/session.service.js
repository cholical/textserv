(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('sessionSvc', ['$cookies', function sessionSvc($cookies) {

  	var sessionUsername = undefined;
  	var sessionToken = undefined;
  	var firstName = undefined;
  	var lastName = undefined;
  	var userId = undefined;

	var saveSession = function (username, data) {
		sessionUsername = username;
		sessionToken = data.token;
		firstName = data.firstName;
		lastName = data.lastName;
		userId = data.userId;
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
    	firstName: firstName,
    	lastName: lastName,
    	userId: userId,
    	saveSession: saveSession
    };

  }]);

}());
