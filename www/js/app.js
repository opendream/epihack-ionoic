// Ionic Epihack App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'epihack' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'epihack.controllers' is found in controllers.js
angular.module('epihack', [
    'ionic',
    'ui.router',
    'epihack.controllers',
    'monospaced.elastic'
])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    $rootScope.settings = SETTINGS;
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })
    .state('app.splash', {
        url: "/splash",
        views: {
            'menuContent': {
                templateUrl: "templates/splash.html"
            }
        }
    })
    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "templates/home.html",
                controller: 'HomeCtrl'
            }
        }
    })
    .state('app.report', {
        url: "/report",
        views: {
            'menuContent': {
                templateUrl: "templates/report.html",
                controller: 'ReportCtrl'
            }
        }
    })
    .state('app.reportForm', {
        url: "/report/form",
        views: {
            'menuContent': {
                templateUrl: "templates/report.form.html",
                controller: 'ReportCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/splash');
});
