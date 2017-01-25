app.controller("StateController",['$scope',function ( $scope) {
  $scope.test = "test";
  $scope.temp = [];
  $scope.add = function (value) {
    var tempColor = document.getElementById('color');
    var color = tempColor.value;
    $scope.temp.push({name:value.name, color:color});

  }
}])
