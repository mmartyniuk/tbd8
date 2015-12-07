(function () {
    'use strict';
    var field = (function () {
        function field() {
            var directive = {};
            directive.restrict = "E";
            directive.templateUrl = "app/common/field.html",
                directive.replace = true;
            directive.scope = {
                name: "@",
                type: "@",
                title: "@",
                value: "=",
                placeholder: "@",
                items: "=",
                required: "@"
            };
            return directive;
        }
        field.instance = function () {
            return new field;
        };
        field.$inject = [];
        return field;
    })();
    angular
        .module("field", [])
        .directive("field", field.instance);
})();
//# sourceMappingURL=field.js.map