
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $http) {

    $scope.todos = []
    $http.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(
            // success
            (resp) => {
                $scope.todos = resp.data
            },
            // error
            (err) => {
                alert('error')
                console.log(err)
            }
        )
}
