(function(){

    angular.module('ToDoApp.ToDoModule', [])
        .filter('startFrom', function() {
            return function(input, start) {
                start = +start; //parse to int
                return input.slice(start);
            }
        }).controller('ToDoCtrl', ToDoCtrl);

    ToDoCtrl.$inject = ['$scope', '$state', '$location', '$mdToast', '$rootScope'];
    function ToDoCtrl($scope, $state, $location, $mdToast, $rootScope) {

        $scope.editMode = false;
        $scope.oldToDo = {};

        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.data = $rootScope.$storage.todos;
        $scope.numberOfPages=function(){
            return Math.ceil($scope.data.length/$scope.pageSize);
        };

        $scope.previous = function(){
            $scope.currentPage = $scope.currentPage-1;
        };

        $scope.next = function(){
            $scope.currentPage = $scope.currentPage+1;
        };

        $scope.predicate = 'completeBy';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        $scope.isActive = function (name) {
            return name === $scope.predicate;
        };

        $scope.addToDo = function(){
            var toDoId = $rootScope.$storage.todos.length + 1;
            var toDoName = $scope.todo.task;
            $rootScope.$storage.todos.push(
                {
                    "id": toDoId,
                    "category": JSON.parse($scope.todo.category),
                    "completeBy": $scope.todo.completeBy,
                    "priority": JSON.parse($scope.todo.priority),
                    "task": toDoName,
                    "isComplete": false
                }
            );
            $scope.todo = null;
            $scope.toDoForm.$setUntouched();
            $mdToast.show(
                $mdToast.simple()
                    .content('Task '+toDoName+' successfully added!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
            );
        };

        $scope.updateToDo = function(todo){

        };

        $scope.deleteToDo = function(todo){
            var toDoTask = todo.task;

            var i = $rootScope.$storage.todos.indexOf(todo);
            if(i != -1) {
                $rootScope.$storage.todos.splice(i, 1);
            }

            $mdToast.show(
                $mdToast.simple()
                    .content('Task '+toDoTask+' successfully deleted!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
            );
        };

    };

})();