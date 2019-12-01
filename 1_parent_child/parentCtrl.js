
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    //$scope.x = 5;
    this.x = 100
    $scope.value1 = 1
    $rootScope.value1 = 1

}
