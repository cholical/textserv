(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('dashboardSvc', ['$http', '$log', 'sessionSvc', function dashboardSvc($http, $log, sessionSvc) {

  	var getDashboard = function () {
  		return $http.post("/api/getDashboard").then(function (response) {
  			return response.data;
  		});
  	}

    var deleteList = function (list_id) {
      var params = {
        list_id: list_id
      }
      return $http.post("/api/deleteList", params).then(function (response) {
        return response.data;
      });
    }

    var createList = function (list_name, list_description) {
      var params = {
        list_name: list_name,
        list_description: list_description
      }
      return $http.post("/api/createList", params).then(function (response) {
        return response.data;
      });
    }

    var logout = function () {
      return $http.post("/api/logout").then(function (response) {
        return response.data;
      });
    }

    //###
    var sendMessage = function (message_body, list_id) {
      var params = {
        list_id: list_id,
        message_body: message_body
      }
      return $http.post("/api/sendMessage", params).then(function (response) {
        return response.data;
      });
    }

    return {
    	getDashboard: getDashboard,
      deleteList: deleteList,
      createList: createList,
      //###
      sendMessage: sendMessage,
      logout: logout
    };
  }]);

}());
