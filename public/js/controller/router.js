app.controller('Router',['$scope','$http', function ($scope, $http) {
$scope.list = [];
  $scope.add = function(){
  //  console.log($scope.data);
    $http.post('/setting/customer/router',$scope.data).then(value => {
      $scope.list.push(value.data[0]);
      console.log($scope.list);
    }, error=>{
      console.log(error);
      alert(error)
    })
    $scope.data = null;
  }
  $scope.edite = function (index){
    $scope.temp = $scope.list[index];
    $scope.position = index
    editShow();

  }
  $scope.save = function(){

    let data = { rt_name: $scope.temp.rt_name, rt_st:$scope.temp.rt_st }
    console.log(data);
    $http.put('/setting/customer/router/'+$scope.temp.rt_id, data).then(value => {
      $scope.list[$scope.position] = value.data[0];
    }, error=>{
      console.log(error);
    })
  }
  $http.get('/setting/customer/router').then(value => {
      $scope.list = value.data
      console.log($scope.list);
  },error=>{
    console.log(error);
  })
}])

function editShow(){
  $('#edite_router').modal('show')
}
