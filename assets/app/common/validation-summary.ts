/// <reference path='../typings/angular.d.ts'/>

((): void => {
    'use strict';

    class validationSummary {
        public static $inject: Array<string> = [];
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = "E"; 
            directive.templateUrl = "/app/common/validation-summary.html";
            directive.replace = true;
            directive.scope = false;
    
            return directive;
        }
        static instance(): ng.IDirective {
            return new validationSummary;
        }
    } 

    angular
      .module("validationSummary", [])
      .directive("validationSummary", validationSummary.instance)

})();