var myApp = angular.module('myApp');

myApp.controller('TopicsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
    console.log('Topics Controller loaded');

    $scope.getTopics = function(){
        $http.get('/api/topics').then(function(response){
            var data = response.data;
            $scope.topics  = data;
        });
    }

    $scope.getTopic = function(){
        var id = $routeParams.id;
        $http.get('/api/topics/'+id).then(function(response){
            var data = response.data;
            $scope.topic = data;
        });
    }

    $scope.addTopic = function(){
        $http.post('/api/topics', $scope.topic).then(function(response){
            window.location.href='#/topics';
        });
    }

    $scope.updateTopic = function(){
        var id = $routeParams.id;
        $http.put('/api/topics/'+id, $scope.topic).then(function(response){
            window.location.href='#/topics';
        });
    }

    $scope.removeTopic = function(id){
        $http.delete('/api/topics/'+id).then(function(response){
            window.location.href='#/topics';
        });
    }
}]);