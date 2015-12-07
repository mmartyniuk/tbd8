/// <reference path='../typings/angular.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>
/// <reference path='../app.apiService.ts'/>
/// <reference path='../app.utilService.ts'/>
/// <reference path='../addresses/edit.controller.ts'/>

module app.order {
    'use strict';

    class HeaderController  {
        isCollapsed: boolean;

        static $inject = ["$rootScope"];

        constructor($rootScope: ng.IRootScopeService) {
            
            var vm = this;
            vm.isCollapsed = true;

            $rootScope.$on("$locationChangeSuccess", (): void => {
                vm.isCollapsed = true;
            });
        }
    }

    angular.module("app").controller("HeaderController", HeaderController);
}