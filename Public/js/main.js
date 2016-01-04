angular.module('se7enfastApp', ['ui.router']);


angular.module('se7enfastApp')
    .config(['$stateProvider',
        function($stateProvider){

            console.log('config loaded');

            $stateProvider
                .state('/main', {
                    url: "",
                    templateUrl: "html/views/home.html"
                })
                .state('/main2', {
                    url: "/",
                    templateUrl: "html/views/home.html"
                })
                .state('home', {
                    url: "/home",
                    templateUrl: "html/views/home.html"
                })
                .state('about', {
                    url: "/about",
                    templateUrl: "html/views/about.html"
                })
                .state('howto', {
                    url: "/howto",
                    templateUrl: "html/views/howto.html"
                })
                .state('locate', {
                    url: "/locate",
                    templateUrl: "html/views/construction.html"
                })
                .state('register', {
                    url: "/register",
                    templateUrl: "html/views/construction.html"
                })
                .state('connect', {
                    url: "/connect",
                    templateUrl: "html/views/contact.html"
                })
        }
    ]);



angular.module('se7enfastApp').controller('mainController', ['$scope', function($scope) {
    console.log('mainController loaded');

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date('06/07/2016');
    initializeClock('clockdiv', deadline);

}]);
