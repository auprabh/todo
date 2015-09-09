(function(){

    angular.module('ToDoApp.LoginModule', []).controller('LoginCtrl', LoginCtrl);
    
    LoginCtrl.$inject = ['$scope', '$state', '$location', '$mdToast', '$rootScope'];
    function LoginCtrl($scope, $state, $location, $mdToast, $rootScope) {
        //$scope.user = {userName:'bean', password:'beaninahurry'};
        
        $scope.login = function(){
            if($scope.user.username === 'bean' && $scope.user.password === 'misterbean'){
                if(!$rootScope.isAuthenticated){
                   $rootScope.isAuthenticated = true; 
                }
                $location.path('/home');
            }else{
                $mdToast.show(
                  $mdToast.simple()
                    .content('Incorrect username or password')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
                );
            }
        }
    };
})();