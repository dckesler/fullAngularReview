var app = angular.module("review");
app.controller("ctrl", function($scope, service){
  $scope.getWeather = function(gps){
    $scope.weather = "Loading";
    service.getWeather(gps).then(function(x){
      $scope.weather = x;
    });
  };

});
