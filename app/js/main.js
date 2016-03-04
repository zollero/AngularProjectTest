
console.log("===============main.js:start================");
require.config({
    paths: {
        angular: "../lib/angular/angular",
        "angular-route": "../lib/angular-route/angular-route",
        "domReady": "../lib/domReady/domReady"
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
            templateUrl: "./views/view1.html",
            controller: "MyCtrl1"
        }).when("/view2", {
            templateUrl: "./views/view2.html",
            controller: "MyCtrl2"
        }).otherwise({
            redirectTo: "view1"
        });
    }]);
});
console.log("===============main.js:end================");