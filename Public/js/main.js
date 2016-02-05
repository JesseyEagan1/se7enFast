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
                    templateUrl: "html/views/register.html"
                })

                .state('connect', {
                    url: "/connect",
                    templateUrl: "html/views/contact.html"
                })
                .state('disclaimer', {
                    url: "/theLegalStuff",
                    templateUrl: "html/views/disclaimer.html"
                })
        }
    ]);



angular.module('se7enfastApp').controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('mainController loaded');

    $scope.form = {};

    $scope.formSubmit = function() {
        console.log($scope.form)
        //$http.post('/submit', $scope.form)
        $http({
            method  : 'post',
            url     : '/api/register',
            data    : $scope.form
        })
            // .then(function(returnData) {
        //    if (returnData.data.success) {
        //        window.location.href = "/contactSuccess";
        //    }
        //}
    };

    $(document).ready(function () {
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });


//===================================================================//
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

//$scope.contactForm = function() {
//    console.log('bjkguilglyi', $scope.contactForm)
//    $http({
//        method  : 'post',
//        url     : '/api/contact',
//        data    : $scope.contactForm
//    }).then(function(returnData) {
//        if (returnData.data.success) {
//            window.location.href="/contactSuccess";
//        }
//        else {
//            console.log(returnData.data.error)
//        }
//        ;
//
//    }, function(err){
//        console.log(err);
//    }
//    })
//};

