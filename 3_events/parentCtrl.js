
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.x = 0

    $scope.$watch('x', function (newX, old) {
        console.log(`old x = ${old} new x = ${newX}`)
        if (newX == 3) {
            //                   ("scenario", data)
            $rootScope.$broadcast("Boom3", "go!")
        }
    })


}
