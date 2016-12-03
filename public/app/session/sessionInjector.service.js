(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('sessionInjector', ['sessionSvc', function sessionInjector(sessionSvc) {

  	var sessionInjector = {
      request: function(config) {
        if (sessionSvc.sessionUsername) {
          config.headers['textserv-session-username'] = sessionSvc.sessionUsername;
          config.headers['textserv-session-token'] = sessionSvc.sessionToken;
          console.log(sessionAdded);
        }
        return config;
      }
    }

    return sessionInjector;

  }]);

}());
