(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('messagesSvc', ['$http', '$log', function messagesSvc($http, $log) {

  	var getMessages = function () {
  		return $http.post("/api/getMessages").then(function (response) {
  			return response.data;
  		});
  	}

 

    return {
    	getMessages: getMessages
  
    };
    
  }]);

}());
