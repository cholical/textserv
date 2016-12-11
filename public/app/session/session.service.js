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
		var cookieValues = {
			username: username,
			token: data.token,
			user_id: data.user_id,
			firstName: firstName,
			lastName: lastName
		}
		var expiration = new Date();
		expiration.setFullYear(expiration.getFullYear() + 1);
		var cookieOptions = {
			expires: expiration
		};
		$cookies.put("sessionUsername", sessionUsername, cookieOptions);
		$cookies.put("sessionToken", sessionToken, cookieOptions);
		$cookies.put("firstName", firstName, cookieOptions);
		$cookies.put("lastName", lastName, cookieOptions);
		$cookies.put("user_id", user_id, cookieOptions);
		console.log("New Cookie Saved");
	}  	

	var getUserId = function () {
		return user_id;
	}

	var setUserId = function (newUserId) {
		user_id = newUserId;
	}

	var getSessionUsername = function () {
		return sessionUsername;
	}

	var setSessionUsername = function (newSessionUsername) {
		sessionUsername = newSessionUsername;
	}

	var getSessionToken = function () {
		return sessionToken;
	}

	var setSessionToken = function (newSessionToken) {
		sessionToken = newSessionToken;
	}

	var getFirstName = function () {
		return firstName;
	}

	var setFirstName = function (newFirstName) {
		firstName = newFirstName;
	}

	var getLastName = function () {
		return lastName;
	}

	var setLastName = function (newLastName) {
		lastName = newLastName;
	}

	var setCredentials = function () {
		sessionUsername = $cookies.get('sessionUsername');
      	sessionToken = $cookies.get('sessionToken');
      	firstName = $cookies.get('firstName');
      	lastName = $cookies.get('lastName');
      	user_id = $cookies.get('user_id');
	}

	var logout = function () {
		$cookies.remove('sessionUsername');
		$cookies.remove('sessionToken');
		$cookies.remove('firstName');
		$cookies.remove('lastName');
		$cookies.remove('user_id');
	}

    return {
    	saveSession: saveSession,
    	getUserId: getUserId,
    	setUserId: setUserId,
    	getSessionUsername: getSessionUsername,
    	setSessionUsername: setSessionUsername,
    	getSessionToken: getSessionToken,
    	setSessionToken: setSessionToken,
    	getFirstName: getFirstName,
    	setFirstName: setFirstName,
    	getLastName: getLastName,
    	setLastName: setLastName,
    	setCredentials: setCredentials,
    	logout: logout
    };

  }]);

}());
