/// <reference path='../typings/angular.d.ts'/>

((): void => {
    'use strict';

    class validateEmail {
        public static $inject: Array<string> = [];
     
        constructor() {
            var directive: ng.IDirective = {},
                emailRegexp: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]+$/i;

            directive.restrict = "E",
            directive.require = "^ngModel",
            directive.link = function (
                scope: ng.IScope, 
                elm: ng.IAugmentedJQuery, 
                attrs: ng.IAttributes, 
                ctrl: any) {
                    ctrl.$validators.email = function (modelValue) {
                        return ctrl.$isEmpty(modelValue) || emailRegexp.test(modelValue);
                    };
                }
                
            return directive;
        }
        static instance(): ng.IDirective {
            return new validateEmail;
        }
    }

    class validateFloat {
        public static $inject: Array<string> = [];

        constructor() {
            var directive: ng.IDirective = {};
            var isValid: Function = function (s) {
                s = $.trim(s);
                var val = parseFloat(s);
                var valid = !isNaN(val) && /^[\d+\.]+$/.test(s) && val >= 0;
                return valid;
            };

            directive.restrict = "A",
            directive.require = "^ngModel",
            directive.link = function (
                scope: ng.IScope, 
                elm: ng.IAugmentedJQuery, 
                attrs: ng.IAttributes, 
                ctrl: any) {
                    ctrl.$validators.float = function (modelValue, viewValue) {
                        if (isValid(viewValue)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    
                }
                
            return directive;
        }
        static instance(): ng.IDirective {
            return new validateFloat;
        }
    }
    
    class validateInteger {
        public static $inject: Array<string> = [];

        constructor() {
            var directive: ng.IDirective = {};
            var isValid: Function = function (s) {
                s = $.trim(s);
                var val = parseInt(s, 10);
                var valid = !isNaN(val) && /^\d+$/.test(s) && val >= 0;
                return valid;
            };

            directive.restrict = "A",
            directive.require = "^ngModel",
            directive.link = function (
                scope: ng.IScope, 
                elm: ng.IAugmentedJQuery, 
                attrs: ng.IAttributes, 
                ctrl: any) {
                    ctrl.$validators.integer = function (modelValue, viewValue) {
                        if (isValid(viewValue)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    
                }

            return directive;
        }
                
        static instance(): ng.IDirective {
            return new validateInteger;
        }
    }

    class showErrors {
        public static $inject: Array<string> = [];
     
        constructor() {
            var directive: ng.IDirective = {};

            directive.restrict = "A",
            directive.require = "^form",
            directive.link = function (
                scope: ng.IScope, 
                elm: ng.IAugmentedJQuery, 
                attrs: any, 
                ctrl: ng.INgModelController) {
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
                            } else {
                                elm.removeClass("has-error");
                            }
                        });
                    }
                }
                
            return directive;
        }
        static instance(): ng.IDirective {
            return new showErrors;
        }
    }

    angular
      .module("formValidation", [])
      .directive("validateEmail", validateEmail.instance)
      .directive("validateInteger", validateInteger.instance)
      .directive("validateFloat", validateFloat.instance)
      .directive("showErrors", showErrors.instance);

})();