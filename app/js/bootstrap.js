
console.log("===============bootstrap.js:start================");
define(["angular", "domReady", "app"], function(angular, domReady) {
    console.log("===============bootstrap.js:in================");
    require(["domReady!"], function(document) {
        angular.bootstrap(document, ["angularTest"]);
    });
});
console.log("===============bootstrap.js:end================");