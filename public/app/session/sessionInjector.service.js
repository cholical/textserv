(function () {

  "use strict";
  var app;
  app = angular.module('textserv');

  app.factory('sessionInjector', ['sessionSvc', function sessionInjector(sessionSvc) {

  	var sessionInjector = {
      request: function(config) {
        if (sessionSvc.getSessionUsername()) {
          config.headers['textserv-session-username'] = sessionSvc.getSessionUsername();
          config.headers['textserv-session-token'] = sessionSvc.getSessionToken();
          console.log(sessionSvc.getSessionUsername());
          console.log(sessionSvc.getSessionToken());
        }
        return config;
      }
    }

    return sessionInjector;

  }]);

}());
