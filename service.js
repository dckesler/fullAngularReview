var app = angular.module("review")
app.service("service", function($http, $q){
  this.getWeather = function(gps){
    var dfd = $q.defer();
    $http({
      method: "GET",
      url: "http://nominatim.openstreetmap.org/reverse?format=json&lat="+gps.lat+'&lon='+gps.lon+"&zoom=18&addressdetails=1"
    }).then(function(data){
      dfd.resolve(data.data.display_name);
    });
    return dfd.promise;
  }
});


// http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon
