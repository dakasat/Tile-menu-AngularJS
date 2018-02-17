var myApp = angular.module("myApp", []);

myApp.controller("myCtrl", function($scope) {
    $scope.mobmenu= false;
    $scope.searchshow = true;

    $scope.searchShowFunc = function() {
        $scope.searchshow = true;
    };

    // Вывод поисковых запросов
    $scope.texts = [];

    $scope.add = function() {
        $scope.texts.push($scope.input);
        $scope.input = '';
    };

});

