/// <reference path='../typings/angular.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>
/// <reference path='../app.apiService.ts'/>
/// <reference path='../app.utilService.ts'/>
/// <reference path='../addresses/edit.controller.ts'/>

module app.user {
    'use strict';

    class EditController  {
        item: Object;
        updateItem: Function;
        userTypes: Object;
        homeAddresses: Object;

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: routeParamsID,
        $location: ng.ILocationService,
        apiService: app.apiService.apiServiceCollection,
        utilService: app.utilService.UtilServiceCollection) {
            
            var vm = this;
            
            vm.item = {};
            vm.updateItem = updateItem;
            vm.userTypes = utilService.userTypes;

            init();

            function init() {
                apiService.getAddresses()
                    .success(function (data) {
                        vm.homeAddresses = $.map(data, function (item) { return { name: item.streetAddress, value: item.id }; });
                    });
    
                if (!$routeParams.id) {
                    return false;
                }
    
                apiService.getUserById($routeParams.id)
                    .success(function (data) {
                        vm.item = data;
                    });
            }

            function updateItem() {
                if ($routeParams.id) {
                    apiService.updateUser(vm.item)
                        .success(function () {
                            $location.path("/users");
                        });
                } else {
                    apiService.addUser(vm.item)
                        .success(function () {
                            $location.path("/users");
                        });
                }
            }
        }
    }

    angular.module("app.user").controller("UserEditController", EditController);
}