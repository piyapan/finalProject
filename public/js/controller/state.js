app.controller("StateController",['$scope', '$http',function ( $scope, $http) {
  $scope.test = "test";
  $scope.temp = [];
  $http.get('/setting/customer/status').then(value => {
    $scope.temp = value.data;
  }, error=>{
    console.log(error);
    alert('error sever');
  })
  $scope.add = function (value) {
    var tempColor = document.getElementById('color');
    var color = tempColor.value;

    var data = {cs_name:value.name, cs_color:color}
    $http.post('/setting/customer/status',data).then(value => {
        $scope.temp.push(data);
        tempColor.value = null;
        var tempName = document.getElementById('nameState');
        tempName.value = null;

    }, error => {
      console.log(error);
      $scope.value = null;
      alert('error sever');
    })
  }

}])
