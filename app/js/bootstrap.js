
console.log("===============bootstrap.js:start================");
define(["angular", "require", "app"], function(angular, require) {
    console.log("===============bootstrap.js:in================");
    require(["domReady!"], function(document) {
        angular.bootstrap(document, ["angularTest"]);
    });
});
console.log("===============bootstrap.js:end================");