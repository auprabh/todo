(function(){

    angular.module('ToDoApp.CategoryModule', [])
        .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }).controller('CategoryCtrl', CategoryCtrl);

    CategoryCtrl.$inject = ['$scope', '$state', '$location', '$mdToast', '$rootScope'];
    function CategoryCtrl($scope, $state, $location, $mdToast, $rootScope) {

        $scope.editMode = false;
        $scope.oldCategoryName = '';

        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.data = $rootScope.$storage.categories;
        $scope.numberOfPages=function(){
            return Math.ceil($scope.data.length/$scope.pageSize);
        };

        $scope.previous = function(){
            $scope.currentPage = $scope.currentPage-1;
        };

        $scope.next = function(){
            $scope.currentPage = $scope.currentPage+1;
        };

        $scope.addCategory = function(){
            var categoryId = $rootScope.$storage.categories.length + 1;
            var categoryName = $scope.category.name;
            $rootScope.$storage.categories.push({id:categoryId, name: categoryName});
            $scope.category.name = null;
            $mdToast.show(
                $mdToast.simple()
                    .content('Category '+categoryName+' successfully added!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
            );
            $scope.category = null;
            //document.categoryForm.category.blur();
            //$scope.categoryForm.$setUntouched();
            //$scope.categoryForm.$setPristine();
        };

        $scope.editCategory = function(category){
            //console.log('category is: ', category);
            //console.log('index is: ', $index);
            $scope.editMode = true;
            $scope.oldCategoryName = category.name;
        };

        $scope.updateCategory = function (category){
            var categoryName = category.name;

            var i = $rootScope.$storage.categories.indexOf(category);
            if(i != -1) {
                $rootScope.$storage.categories[i] = category;
            }

            $mdToast.show(
                $mdToast.simple()
                    .content('Category Name changed from '+$scope.oldCategoryName+' to '+categoryName+' successfully!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
            );

            $scope.editMode = false;
        };

        $scope.deleteCategory = function(category){
            var categoryName = category.name;

            var i = $rootScope.$storage.categories.indexOf(category);
            if(i != -1) {
                $rootScope.$storage.categories.splice(i, 1);
            }

            $mdToast.show(
                $mdToast.simple()
                    .content('Category '+categoryName+' successfully deleted!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
            );
        };




    };
})();