(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('dashboardSvc', ['$http', '$log', 'sessionSvc', function dashboardSvc($http, $log, sessionSvc) {

  	var getDashboard = function () {
      var user_id = sessionSvc.getUserId();
  		var dashboardParams = {
  			user_id: user_id
  		}
  		return $http.post("/api/getDashboard", dashboardParams).then(function (response) {
  			return response.data;
  		});
  	}

    return {
    	getDashboard: getDashboard
    };
  }]);

}());
