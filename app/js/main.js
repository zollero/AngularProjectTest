
console.log("===============main.js:start================");
require.config({
    paths: {
        angular: "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "domReady": "../bower_components/domReady/domReady"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            deps: ["angular"]
        }
    },
    deps: ["./bootstrap"]
});

require(["app", "bootstrap", "controllers/controllers",
        "directives/directives", "filters/filters",
        "services/services"], function(app) {
    "use strict";

    return app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/view1", {
            templateUrl: "./view1/view1.html",
            controller: "MyCtrl1"
        }).when("/view2", {
            templateUrl: "./view2/view2.html",
            controller: "MyCtrl2"
        }).otherwise({
            redirectTo: "view1"
        });
    }]);
});
console.log("===============main.js:end================");