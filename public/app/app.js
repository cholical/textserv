(function () {

  'use strict';
  var app = angular.module('textserv', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.modal', 'ngCookies']);

  app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', configRoutes]);

  function configRoutes ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'app/messages/messages.html',
        controller: 'messagesCtrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'listCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl'
      })

    $urlRouterProvider.otherwise('/home');

    $httpProvider.interceptors.push('sessionInjector');

    // $locationProvider.html5Mode({
    //   enabled: true
    // });

  };

  app.run(['$rootScope', '$timeout', '$state', '$cookies', 'sessionSvc', function ($rootScope, $timeout, $state, $cookies, sessionSvc) {
    var credentials = $cookies.get('sessionToken');
    if (credentials) {
      console.log("Cookie found");
      sessionSvc.setCredentials();
    } else {
      console.log("Cookie not found");
      $timeout(function() {
        //Not the best implementation, requires more research
        $state.go('home');
      });
    }

  }]);

}());
