angular.module('test', [])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', { templateUrl: 'js/partials/test.html'})
        .when('/areaguide', { templateUrl: 'js/partials/list.html', controller: 
        	PostListCtrl })
        .when('/!/casein', {templateUrl: 'pages/casein.html'}).
        when('/!/milk-products', {
          templateUrl: 'pages/milk_product.html'
        }).
         when('/!/nutraceuticals', {
          templateUrl: 'pages/nutraceuticals.html'
        }).
         when('/!/spas', {
          templateUrl: 'pages/spas.html'
        }).
         when('/!/rciagricultural', {
          templateUrl: 'pages/rciagricultural.html'
        }).
         when('/!/contact-us', {
          templateUrl: 'pages/contactus.html'
        }).
         when('/!/dairycal', {
          templateUrl: 'pages/dairycal.html'
        }).
         when('/!/cocal', {
          templateUrl: 'pages/cocal.html'
        }).

          when('/!/whey', {
          templateUrl: 'pages/whey.html'
        }).
           when('/!/colostrum', {

          templateUrl: 'pages/colostrum.html'
        }).
          when('/!/ssien-mineral-complex', {
          templateUrl: 'pages/ossein.html'

        }).
          when('/!/elasmocal', {
          templateUrl: 'pages/elasmocal.html'
        }).
           when('/!/nutraceuticals', {

          templateUrl: 'pages/nutraceuticals.html'
        }).
          when('/!/nutraceuticals', {
          templateUrl: 'pages/nutraceuticals.html'

        }).
        otherwise({ redirectTo: '/' });
});

/* making model 
var app = angular.module('myApp', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/home.html', activetab: 'projects', controller: HomeCtrl }).
        when('/project/:projectId', {
          templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; }
        }).
        when('/casein', {
          templateUrl: 'pages/casein.html'
        }).
        when('/milk-products', {
          templateUrl: 'pages/milk_product.html'
        }).
         when('/nutraceuticals', {
          templateUrl: 'pages/nutraceuticals.html'
        }).
         when('/spas', {
          templateUrl: 'pages/spas.html'
        }).
         when('/rciagricultural', {
          templateUrl: 'pages/rciagricultural.html'
        }).
         when('/contact-us', {
          templateUrl: 'pages/contactus.html'
        }).
         when('/dairycal', {
          templateUrl: 'pages/dairycal.html'
        }).
         when('/cocal', {
          templateUrl: 'pages/cocal.html'
        }).
          when('/whey', {
          templateUrl: 'pages/whey.html'
        }).
           when('/colostrum', {
          templateUrl: 'pages/colostrum.html'
        }).
          when('/ossien-mineral-complex', {
          templateUrl: 'pages/ossein.html'
        }).
          when('/elasmocal', {
          templateUrl: 'pages/elasmocal.html'
        }).
           when('/nutraceuticals', {
          templateUrl: 'pages/nutraceuticals.html'
        }).
          when('/nutraceuticals', {
          templateUrl: 'pages/nutraceuticals.html'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

  }]);*/




