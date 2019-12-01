
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.devices = [
        new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
        new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
        new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
        new Mobile({ model: "LG V60", color: "White", price: 7500 })
    ]
    $scope.delete = (index) => {
        $scope.devices.splice(index, 1)
    }
    $scope.sorter = 'price'
    $scope.direct = false

}
