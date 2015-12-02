app = angular.module('app', ['ui.bootstrap', 'ngResource', 'ui.router']);

app.config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
});

app.config(function($stateProvider, $urlRouterProvider){


    //$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('task', {
            url: "/",
            templateUrl: "/static/partials/task.html"
        })

        .state('user', {
            url: '/user',
            templateUrl: "static/partials/users.html",
            controller: ['$scope', '$http',
                function( $scope,   $http) {

                    $scope.users = [];
                    $http.get('/api/v1/user/').success(function(data) {
                        $scope.users = data.objects;
                    }).error(function(data, status, headers, config) {
                            if(status=401){
				window.location = '/admin'
                            }
                    })
                }
            ]
        })

        .state('user.view', {
            url: '/:user_id',
            views: {
                '': {
                    templateUrl: "static/partials/users.view.html",
                    controller: ['$scope', '$http', '$stateParams',
                        function( $scope,   $http,   $stateParams) {

                            $scope.selected_user = {};
                            $http.get('/api/v1/user/'+$stateParams.user_id+'/').success(function(data) {
                                $scope.selected_user = data;
                            }).error(function(data, status, headers, config) {
                            if(status=401){
                                window.location = '/admin'
                            }
                    })
                        }
                    ]
                }
            }
        })

		.state('auto_model.create', {
            url: '/new',
            templateUrl: "static/partials/create_auto_model.view.html"
	               
        })



	        .state('auto_model.view', {
            url: '/:car_model_id',
            views: {
                '': {
                    templateUrl: "static/partials/auto_models.view.html",
                    controller: ['$scope', '$http', '$stateParams',
                        function( $scope,   $http,   $stateParams) {
                            $scope.selectedCar = {};
                            $http.get('/api/v1/auto_model/'+$stateParams.car_model_id+'/').success(function(data) {
                                $scope.selected_car = data;
                            }).error(function(data, status, headers, config) {
                            if(status=401){
                                window.location = '/admin';
                            }
                    })
                        }
                    ]
                }
            }
        })




        .state('auto_model', {
            url: '/auto_model',
            templateUrl: "static/partials/auto_models.html",
            controller: ['$scope', '$http',
                function( $scope,   $http) {
		    
                    $scope.auto_models = [];
                    $http.get('/api/v1/auto_model/').success(function(data) {
                        $scope.auto_models = data.objects;
                    }).error(function(data, status, headers, config) {
                            if(status=401){
                                window.location = '/admin';
                            }
                    })
                }
            ]
        })



});

app.run(['$rootScope', function($rootScope) {

}]);








