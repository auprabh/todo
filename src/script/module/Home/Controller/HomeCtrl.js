(function(){

    angular.module('ToDoApp.HomeModule', []).controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$scope', '$state', '$location'];
    function HomeCtrl($scope, $state, $location) {
        $scope.appName = 'todo';
        $scope.tabs = [
          //{ title: 'Dashboard', state: '/home/dashBoard'},
          { title: 'ToDo\'s', state: '/home/toDo'},
          { title: 'Categories', state: '/home/category'}
        ];
        $scope.loadTabContent = function (state){
            $location.url(state);
        }
    };
    
})();