var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix("");
}]);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'TopicsController',
        templateUrl: 'views/topics.html'
    })
    .when('/topics',{
        controller: 'TopicsController',
        templateUrl: 'views/topics.html'
    })
    .when('/topics/details/:id',{
        controller: 'TopicsController',
        templateUrl: 'views/topic_details.html'
    })
    .when('/topics/add',{
        controller: 'TopicsController',
        templateUrl: 'views/add_topic.html'
    })
    .when('/topics/edit/:id',{
        controller: 'TopicsController',
        templateUrl: 'views/edit_topic.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});