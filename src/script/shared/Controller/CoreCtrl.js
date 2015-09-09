(function(){

    angular
        .module('ToDoApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.router', 'ToDoApp.HomeModule', 'ToDoApp.LoginModule'])
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
    
    CoreCtrl.$inject = ['$scope', '$state', '$location', '$mdToast', '$rootScope'];
    function CoreCtrl($scope, $state, $location, $mdToast, $rootScope) {
        
        $rootScope.isAuthenticated = false;
        $scope.appName = 'todo';
        
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