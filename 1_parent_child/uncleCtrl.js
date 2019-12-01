module.controller("uncleCtrl", UncleCtrl)


// DI dependency injection - IOC
function UncleCtrl($scope, $rootScope) {

    $scope.printValue = function () {
        // how to access parent controller value1
        alert($rootScope.value1)
    }

}
