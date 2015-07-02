var discount = angular.module('discount', []);

var get_resource = function(options,$http,callback){
    var options = options || '';
    var api_url = ["http://localhost:8000/api/products", options].join('');

    $http.get(api_url).success(function(data){
        callback(data);
    });
};

// basic controller
discount.controller('welcomeCtrl', function($scope, $http){
    $scope.loading = true;
    get_resource("?limit=20", $http, function(response){
        $scope.products = response;
        $scope.loading = false;
    });

    // sort faces :)
    $scope.change_sort = function(){
        $scope.loading = true;
        var option = ["?limit=20", "sort=" + $scope.filter_sort].join('&');
        get_resource(option, $http, function(response){
            $scope.products = response;
            $scope.loading = false;
        });
    }
});
