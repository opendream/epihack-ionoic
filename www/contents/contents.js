angular.module('epihack')

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('app.page--1', {
        url: '/contents/1',
        views: {
            'menuContent': {
                templateUrl: "contents/templates/p1.list.html"
            }
        }
    })
    .state('app.page--11', {
        url: '/contents/11',
        views: {
            'menuContent': {
                templateUrl: "contents/templates/p11.detail.html"
            }
        }
    })
    .state('app.page--12', {
        url: '/contents/12',
        views: {
            'menuContent': {
                templateUrl: "contents/templates/p12.detail.html"
            }
        }
    })
    .state('app.page--2', {
        url: '/contents/2',
        views: {
            'menuContent': {
                templateUrl: "contents/templates/p2.detail.html"
            }
        }
    });
});
