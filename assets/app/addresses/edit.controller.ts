/// <reference path='../typings/angular.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>
/// <reference path='../app.apiService.ts'/>
/// <reference path='../app.utilService.ts'/>

interface routeParamsID extends ng.route.IRouteProvider {
  id: any[];
}

module app.address {
    'use strict';

    class EditController  {
        item: Object;
        updateItem: Function;
        toggleIdsCheckbox: Function;

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: routeParamsID,
        $location: ng.ILocationService,
        apiService: app.apiService.apiServiceCollection,
        utilService: app.utilService.UtilServiceCollection) {
            
            var vm = this;
            
            vm.item = {};
            vm.updateItem = updateItem;
            vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;

            init();

            function init() {
                if (!$routeParams.id) {
                    return false;
                }
                apiService.getAddressById($routeParams.id)
                    .success(function (data) {
                        vm.item = data;
                    });
            }

            function updateItem() {
                if ($routeParams.id) {
                    apiService.updateAddress(vm.item)
                        .success(function () {
                            $location.path("/addresses");
                        });
                } else {
                    apiService.addAddress(vm.item)
                        .success(function () {
                            $location.path("/addresses");
                        });
                }
            }
        }
    }

    angular.module("app.address").controller("AddressEditController", EditController);
}