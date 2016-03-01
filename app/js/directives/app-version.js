

define(["./directives"], function(directives) {
    "use strict";

    console.log("app-version=============");

    directives.directive("appVersion", ["version", function(version) {

        return function(scope, element) {
            element.text(version);
        };
    }]);
});