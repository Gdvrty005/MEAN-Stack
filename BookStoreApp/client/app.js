var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix("");
}]);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books',{
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books/details/:id',{
        controller: 'BooksController',
        templateUrl: 'views/book_details.html'
    })
    .when('/books/add',{
        controller: 'BooksController',
        templateUrl: 'views/add_book.html'
    })
    .when('/books/edit/:id',{
        controller: 'BooksController',
        templateUrl: 'views/edit_book.html'
    })
    .when('/genres',{
        controller: 'GenresController',
        templateUrl: 'views/genres.html'
    })
    .when('/genres/add',{
        controller: 'GenresController',
        templateUrl: 'views/add_genre.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});