

define(["./filters"], function(filters) {
    "use strict";

    console.log("interpolate-filter=========");
    filters.filter('interpolate', ['version', function(version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
});
