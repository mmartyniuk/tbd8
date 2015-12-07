(function () {
    'use strict';
    var validationSummary = (function () {
        function validationSummary() {
            var directive = {};
            directive.restrict = "E";
            directive.templateUrl = "/app/common/validation-summary.html";
            directive.replace = true;
            directive.scope = false;
            return directive;
        }
        validationSummary.instance = function () {
            return new validationSummary;
        };
        validationSummary.$inject = [];
        return validationSummary;
    })();
    angular
        .module("validationSummary", [])
        .directive("validationSummary", validationSummary.instance);
})();
//# sourceMappingURL=validation-summary.js.map