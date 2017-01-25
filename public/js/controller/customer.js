app.controller('CustomerFromController',['$scope',function ($scope) {
  $scope.type = [{key:0, name:"BANK"}, {key:1, name:"NON-BANK"}];
  $scope.temp = [];
  $scope.add = function (value) {
    console.log(value);

  var number = $scope.type.find((item) => {
      return item.key == value.number;
    });
    $scope.temp.push({name:value.name,type:number});
    
    console.log($scope.temp);

  }
}]);
