angular.module('se7enfastApp', ['ngRoute']);


angular.module('se7enfastApp')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl	:'/html/index.html',
                controller	:'mainController'
            })

            .when('/home', {
                templateUrl	:'/html/home.html',
                controller	:'mainController'
            })

            .when('/about', {
                templateUrl	:'/html/about.html',
                controller	:'mainController'
            })

            .when('/howto', {
                templateUrl	:'/html/howto.html',
                controller	:'mainController'
            })

    })



angular.module('se7enfastApp').controller('mainController', ['$scope', function($scope) {


}]);
