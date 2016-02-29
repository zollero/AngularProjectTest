

define(["directives/directives"], function(directives) {
    directives.provider("version", ["$scope", function() {
        $scope.version = "0.1";
    }]);
});