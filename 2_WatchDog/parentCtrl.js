
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.x = 0

    $scope.$watch('x', (newX, old) => {
        // what to do whenever x was changed!
        console.log(`old x = ${old} new x = ${newX}`)
    })

}
