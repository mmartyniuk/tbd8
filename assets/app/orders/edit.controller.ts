/// <reference path='../typings/angular.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>
/// <reference path='../app.apiService.ts'/>
/// <reference path='../app.utilService.ts'/>
/// <reference path='../addresses/edit.controller.ts'/>

module app.address {
    'use strict';

    class EditController  {
        item: Object;
        updateItem: Function;
        toggleIdsCheckbox: Function;
        orderStatus: Object;
        clients: Object;
        drivers: Object;
        sourceAddresses: Object;
        destinationAddresses: Object;

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: routeParamsID,
        $location: ng.ILocationService,
        apiService: app.apiService.apiServiceCollection,
        utilService: app.utilService.UtilServiceCollection) {
            
            var vm = this;
            
            vm.item = {};
            vm.updateItem = updateItem;
            vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;
            vm.orderStatus = utilService.orderStatus;

            init();

            function init() {
                apiService.getUsers()
                    .success(function (data) {
                        vm.clients = $.map(data, function (item) { return { name: item.name, value: item.id }; });
                    });
    
                apiService.getUsers()
                    .success(function (data) {
                        vm.drivers = $.map(data, function (item) { return { name: item.name, value: item.id }; });
                    });
    
                apiService.getAddresses()
                    .success(function (data) {
                        vm.sourceAddresses = $.map(data, function (item) { return { name: item.streetAddress, value: item.id }; });
                    });
    
                apiService.getAddresses()
                    .success(function (data) {
                        vm.destinationAddresses = $.map(data, function (item) { return { name: item.streetAddress, value: item.id }; });
                    });
    
                if (!$routeParams.id) {
                    return false;
                }

                apiService.getOrderById($routeParams.id)
                    .success(function (data) {
                        vm.item = data;
                    });
            }

            function updateItem() {
                if ($routeParams.id) {
                    apiService.updateOrder(vm.item)
                        .success(function () {
                            $location.path("/orders");
                        });
                } else {
                    apiService.addOrder(vm.item)
                        .success(function () {
                            $location.path("/orders");
                        });
                }
            }
        }
    }

    angular.module("app.order").controller("OrderEditController", EditController);
}