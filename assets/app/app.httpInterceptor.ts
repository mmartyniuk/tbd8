/// <reference path='typings/angular.d.ts'/>
/// <reference path='app.config.ts'/>

/*interface RootScopeErrorList extends ng.IRootScopeService {
  errorList: any[];
}*/

module app.httpInterceptor {
    'use strict';
    
    class HttpInterceptor {
        constructor(private $q: ng.IQService, public $rootScope: RootScopeErrorList) {};

        parseErrors(modelState: any) {
            for (var key in modelState) {
                for (var i = 0; i < modelState[key].length; i++) {
                    this.$rootScope.errorList.push(modelState[key][i]);
                }
            }
        }

        error(response: any) {
            if (!this.$rootScope.errorList) {
                this.$rootScope.errorList = [];
            }
            if (response.data && response.data.errors) {
                this.parseErrors(response.data.errors);
            } else if (response.status === 400) {
                this.$rootScope.errorList.push("An error occurred during processing your request.");
            } else if (response.status === 404) {
                this.$rootScope.errorList.push("The entity has been removed or does not exist.");
            }
            return this.$q.reject(response);
        }
        returnThisClassValue () {
            return {
                requestError: this.error,
                responseError: this.error
            }
        };

    }

    factory.$inject = ['$q', '$rootScope'];

    function factory ($q: ng.IQService, $rootScope: RootScopeErrorList){
        return new HttpInterceptor($q, $rootScope);
    }

    angular
        .module('app.httpInterceptor', [])
        .factory('httpInterceptor', factory);
}