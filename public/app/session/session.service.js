(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('sessionSvc', ['$cookies', function sessionSvc($cookies) {

  	var sessionUsername = undefined;
  	var sessionToken = undefined;
  	var firstName = undefined;
  	var lastName = undefined;
  	var user_id = undefined;

	var saveSession = function (username, data) {
		sessionUsername = username;
		sessionToken = data.token;
		firstName = data.firstName;
		lastName = data.lastName;
		user_id = data.user_id;
		console.log(user_id);
		var cookieValues = {
			username: username,
			token: data.token
		}
		var expiration = new Date();
		expiration.setFullYear(expiration.getFullYear() + 1);
		var cookieOptions = {
			expires: expiration
		};
		$cookies.put("credentials", cookieValues, cookieOptions);
		console.log("New Cookie Saved");
	}  	

	var getUserId = function () {
		return user_id;
	}

	var getSessionUsername = function () {
		return sessionUsername;
	}

	var getSessionToken = function () {
		return sessionToken;
	}

    return {
    	sessionUsername: sessionUsername,
    	getSessionUsername: getSessionUsername,
    	getSessionToken: getSessionToken,
    	sessionToken: sessionToken,
    	firstName: firstName,
    	lastName: lastName,
    	user_id: user_id,
    	getUserId: getUserId,
    	saveSession: saveSession
    };

  }]);

}());
