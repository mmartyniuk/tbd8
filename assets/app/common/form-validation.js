(function () {
    'use strict';
    var validateEmail = (function () {
        function validateEmail() {
            var directive = {}, emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]+$/i;
            directive.restrict = "E",
                directive.require = "^ngModel",
                directive.link = function (scope, elm, attrs, ctrl) {
                    ctrl.$validators.email = function (modelValue) {
                        return ctrl.$isEmpty(modelValue) || emailRegexp.test(modelValue);
                    };
                };
            return directive;
        }
        validateEmail.instance = function () {
            return new validateEmail;
        };
        validateEmail.$inject = [];
        return validateEmail;
    })();
    var validateFloat = (function () {
        function validateFloat() {
            var directive = {};
            var isValid = function (s) {
                s = $.trim(s);
                var val = parseFloat(s);
                var valid = !isNaN(val) && /^[\d+\.]+$/.test(s) && val >= 0;
                return valid;
            };
            directive.restrict = "A",
                directive.require = "^ngModel",
                directive.link = function (scope, elm, attrs, ctrl) {
                    ctrl.$validators.float = function (modelValue, viewValue) {
                        if (isValid(viewValue)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                };
            return directive;
        }
        validateFloat.instance = function () {
            return new validateFloat;
        };
        validateFloat.$inject = [];
        return validateFloat;
    })();
    var validateInteger = (function () {
        function validateInteger() {
            var directive = {};
            var isValid = function (s) {
                s = $.trim(s);
                var val = parseInt(s, 10);
                var valid = !isNaN(val) && /^\d+$/.test(s) && val >= 0;
                return valid;
            };
            directive.restrict = "A",
                directive.require = "^ngModel",
                directive.link = function (scope, elm, attrs, ctrl) {
                    ctrl.$validators.integer = function (modelValue, viewValue) {
                        if (isValid(viewValue)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                };
            return directive;
        }
        validateInteger.instance = function () {
            return new validateInteger;
        };
        validateInteger.$inject = [];
        return validateInteger;
    })();
    var showErrors = (function () {
        function showErrors() {
            var directive = {};
            directive.restrict = "A",
                directive.require = "^form",
                directive.link = function (scope, elm, attrs, ctrl) {
                    var inputNames = attrs.showErrors;
                    if (!inputNames) {
                        return false;
                    }
                    var names = inputNames.split(",");
                    for (var i = 0; i < names.length; i++) {
                        var inputName = names[i];
                        function modelInvalid() {
                            return ctrl[inputName].$invalid && ctrl.$dirty;
                        }
                        scope.$watch(modelInvalid, function (newVal, oldVal) {
                            if (newVal) {
                                elm.addClass("has-error");
                            }
                            else {
                                elm.removeClass("has-error");
                            }
                        });
                    }
                };
            return directive;
        }
        showErrors.instance = function () {
            return new showErrors;
        };
        showErrors.$inject = [];
        return showErrors;
    })();
    angular
        .module("formValidation", [])
        .directive("validateEmail", validateEmail.instance)
        .directive("validateInteger", validateInteger.instance)
        .directive("validateFloat", validateFloat.instance)
        .directive("showErrors", showErrors.instance);
})();
//# sourceMappingURL=form-validation.js.map