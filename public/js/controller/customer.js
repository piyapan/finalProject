app.controller('CustomerFromController',['$scope','$http',function ($scope, $http) {
  $scope.type = [{tc_id:1, tc_name:"BANK"}, {tc_id:2, tc_name:"NON-BANK"}];
  $scope.temp;
  $scope.add = function (value) {
    console.log(value);

  var number = $scope.type.find((item) => {
      return item.tc_id == value.c_type;
    });


    $http.post('/setting/customer/save',value).then(
      value => {
      $scope.temp.push(value.data[0])
    }, error =>{
      console.log(error)
    })


  }
  $http.get('/setting/customer/list').then(value => {
    $scope.temp = value.data
    console.log($scope.temp);
  },error => {
    console.log(err);
  })
}]);
