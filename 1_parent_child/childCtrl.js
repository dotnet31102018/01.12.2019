
module.controller("childCtrl", ChildCtrl)


// DI dependency injection - IOC
function ChildCtrl($scope) {

    $scope.y = 1
//    $scope.$parent
    //$scope.x = 12
    this.x = 5


}

