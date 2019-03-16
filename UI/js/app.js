var app = angular.module("starter" , []);
var url = "http://127.0.0.1:5000/"
app.controller("block_creator" , function ($scope , $http, $window){

    $scope.make_block = function(data){
        console.log("data" , data);
        $http.post(url, data)
            .then(function successCallback(response){
                $window.alert("Successfully Casted Your Vote");
                $window.location.reload();
            }, function errorCallback(response){
                $window.alert("POST-ing of data failed");
                $window.location.reload();
            });
    }
    
});