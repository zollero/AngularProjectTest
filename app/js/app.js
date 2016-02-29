
console.log("===============app.js:start================");
define(["angular", "angular-route", "./controllers/index",
        "./directives/index", "./filters/index", "./services/index"], function(angular) {
    console.log("===============app.js:in================");
    "use strict";

    return angular.module("angularTest", ["controllers", "directives", "filters", "services", "ngRoute"]);
});
console.log("===============app.js:end================");