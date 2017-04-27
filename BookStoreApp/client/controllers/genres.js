var myApp = angular.module('myApp');

myApp.controller('GenresController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
    console.log('Genres Controller loaded...');

    $scope.getGenres = function(){
        $http.get('/api/genres').then(function(response){
            var data = response.data;
            $scope.genres = data;
           
        });
    }
    $scope.addGenre = function(){
        $http.post('/api/genres',$scope.genre).then(function(response){
            window.location.href='#/books';
        });
    }
}]);