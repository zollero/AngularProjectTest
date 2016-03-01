
console.log("===============app.js:start================");
define(["angular", "angular-route", "./controllers/index",
        "./directives/index", "./services/index", "./filters/index"], function(angular) {
    console.log("===============app.js:in================");
    "use strict";

    return angular.module("angularTest", ["controllers", "directives", "services", "filters", "ngRoute"]);
});
console.log("===============app.js:end================");