
module.controller("mathCtrl", MathCtrl)


function MathCtrl($scope, $rootScope) {

    $scope.x = 0
    $scope.y = 0
    $scope.result = 0
    $scope.op = "+"
    $scope.mapper = new Map()
    $scope.mapper.set("+", () => { return $scope.x + $scope.y })
    $scope.mapper.set("-", () => { return $scope.x - $scope.y })
    $scope.mapper.set("*", () => { return $scope.x * $scope.y })
    $scope.mapper.set("/", () => { return $scope.x / $scope.y })
    function calc() {
        $scope.result = $scope.mapper.get($scope.op)()
    }
    $scope.$watch('x', (newX, old) => {
        calc()
    })
    $scope.$watch('y', (newX, old) => {
        calc()
    })
    $scope.$watch('op', (newX, old) => {
        calc()
    })

}
