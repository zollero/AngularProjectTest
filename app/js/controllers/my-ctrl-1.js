

define(["controllers/controllers"], function(controllers) {
    "use strict";

    controllers.controller("MyCtrl1",["$scope", function($scope) {
        $scope.version = "0.0.1";
    }]);
});