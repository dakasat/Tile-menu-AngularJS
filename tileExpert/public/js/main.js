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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKFwibXlBcHBcIiwgW10pO1xuXG5teUFwcC5jb250cm9sbGVyKFwibXlDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tb2JtZW51PSBmYWxzZTtcbiAgICAkc2NvcGUuc2VhcmNoc2hvdyA9IHRydWU7XG5cbiAgICAkc2NvcGUuc2VhcmNoU2hvd0Z1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLnNlYXJjaHNob3cgPSB0cnVlO1xuICAgIH07XG5cbiAgICAvLyDQktGL0LLQvtC0INC/0L7QuNGB0LrQvtCy0YvRhSDQt9Cw0L/RgNC+0YHQvtCyXG4gICAgJHNjb3BlLnRleHRzID0gW107XG5cbiAgICAkc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS50ZXh0cy5wdXNoKCRzY29wZS5pbnB1dCk7XG4gICAgICAgICRzY29wZS5pbnB1dCA9ICcnO1xuICAgIH07XG5cbn0pO1xuXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
