(function(){

    angular
        .module('ToDoApp',[
            'ngMaterial',
            'ngMessages',
            'ngStorage',
            'ngAnimate',
            'ui.router',
            'ToDoApp.HomeModule',
            'ToDoApp.LoginModule',
            'ToDoApp.ToDoModule',
            'ToDoApp.CategoryModule'])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider){
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: '/script/module/Login/View/login.htm'
            }).state('home', {
                url: '/home',
                templateUrl: '/script/module/Home/View/home.htm'
            }).state('home.toDo', {
                url: '/toDo',
                templateUrl: '/script/module/ToDo/View/toDo.htm'
            }).state('home.category', {
                url: '/category',
                templateUrl: '/script/module/Category/View/category.htm'
            }).state('home.dashBoard', {
                url: '/dashBoard',
                templateUrl: '/script/module/DashBoard/View/dashBoard.htm'
            });
            $urlRouterProvider.otherwise('/login');
        }).config(function ($mdThemingProvider) {
            $mdThemingProvider
                .theme('default')
                .primaryPalette('indigo')
                .accentPalette('pink')
                .warnPalette('red')
                .backgroundPalette('blue-grey')
            }).controller('CoreCtrl', CoreCtrl);
    
    CoreCtrl.$inject = ['$scope', '$state', '$location', '$mdToast', '$rootScope', '$localStorage'];
    function CoreCtrl($scope, $state, $location, $mdToast, $rootScope, $localStorage) {
        
        $rootScope.isAuthenticated = false;
        $scope.appName = 'todo';

        $rootScope.$storage = $localStorage;

        if($rootScope.$storage.categories){
            console.log('$rootScope.$storage.categories already exists');
        }else{
            $rootScope.$storage.categories = [
                    {
                        "id": 1,
                        "name": "My default category"
                    }
                ];
        }

        if($rootScope.$storage.priorities){
            console.log('$rootScope.$storage.priorities already exists');
        }else{
            $rootScope.$storage.priorities = [
                {
                    "id": 1,
                    "name": "High"
                },
                {
                    "id": 2,
                    "name": "Medium"
                },
                {
                    "id": 3,
                    "name": "Low"
                }
            ];
        }

        if($rootScope.$storage.todos){
            console.log('$rootScope.$storage.todos already exists');
        }else{
            $rootScope.$storage.todos = [
                {
                    "id": 1,
                    "category": {
                        "id": 1,
                        "name": "My default category"
                    },
                    "completeBy": "2015-09-12T14:00:00.000Z",
                    "priority": {
                        "id": 2,
                        "name": "Medium"
                    },
                    "task": "My awesome task",
                    "isComplete": false
                }
            ];
        }

        if($rootScope.$storage.statuses){
            console.log('$rootScope.$storage.statuses already exists');
        }else{
            $rootScope.$storage.statuses = [
                {
                    "id": 1,
                    "name": "All"
                },
                {
                    "id": 2,
                    "name": "Complete"
                },
                {
                    "id": 3,
                    "name": "In-progress"
                }
            ];
        }

        $scope.logout = function(){
            if($rootScope.isAuthenticated){
                $rootScope.isAuthenticated = false;
                $location.path('/login');
            }
        }
        //--------------------------------------------
        var last = {bottom: false, top: true, left: false, right: true};
        $scope.toastPosition = angular.extend({},last);
        $scope.getToastPosition = function() {
            sanitizePosition();
            return Object.keys($scope.toastPosition).filter(function(pos) { 
                return $scope.toastPosition[pos]; 
            }).join(' ');
        };
        function sanitizePosition() {
            var current = $scope.toastPosition;
            if ( current.bottom && last.top ) current.top = false;
            if ( current.top && last.bottom ) current.bottom = false;
            if ( current.right && last.left ) current.left = false;
            if ( current.left && last.right ) current.right = false;
            last = angular.extend({},current);
        }
        //-------------------------------------------------
        
        
        
    };
    
})();