/// <reference path='../typings/angular.d.ts'/>

((): void => {
    'use strict';

    class field {
        public static $inject: Array<string> = [];
        constructor() {
            var directive: ng.IDirective = {};
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
        static instance(): ng.IDirective {
            return new field;
        }
    } 

    angular
      .module("field", [])
      .directive("field", field.instance)

})();