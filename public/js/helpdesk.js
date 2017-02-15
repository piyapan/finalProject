var app = angular.module('help', [])
app.controller('helpController', ['$scope','$http', function ($scope, $http) {

    $scope.getIp = function(id){
      $http.get('/helpdesk/getList/'+id).then(value => {
        $scope.list = value.data;
      }, error=>{
        console.log(value.error);
      })
      $http.get('/helpdesk/groupIp/'+id).then(value => {
        $scope.content = value.data[0];
      }, error=>{
        console.log(value.error);
      })
    }
    $scope.selectItem = function(index){
      $scope.packages = {
        detail:$scope.content,
        data:$scope.list[index]
      }
      changIP();
    }
    $scope.check = function(){
      $scope.alert_ais = $scope.list.find((item) => {
        if (item.Ia_ais == $scope.packages.data.Ia_ais) {
          return true;
        }else {
          return false;
        }
      })
      $scope.alert_dtac = $scope.list.find((item) => {
        if (item.Ia_dtac == $scope.packages.data.Ia_dtac) {
          return true;
        }else {
          return false;
        }
      })
    }
    $scope.save = function(){
      console.log($scope.packages.data);
      $http.post('/helpdesk/edite',$scope.packages.data).then(value => {
        console.log(value);
      },error=>{
        console.log(error);
      })
    }
}])
