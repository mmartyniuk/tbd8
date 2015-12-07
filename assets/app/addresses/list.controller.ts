/// <reference path='../typings/angular.d.ts'/>
/// <reference path='../typings/ng-table.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>
/// <reference path='../app.apiService.ts'/>
/// <reference path='../app.utilService.ts'/>

module app.address {
    'use strict';

    class ListController {
        item: Object;
        deleteItem: Function;
        editItem: Function;
        toggleIdsCheckbox: Function;
        tableParams: Object;
        createLink: string;

        static $inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];

        constructor($location: ng.ILocationService,
        $route: ng.route.IRouteService,
        apiService: app.apiService.apiServiceCollection,
        utilService: app.utilService.UtilServiceCollection,
        NgTableParams: ng.ngtable.ITableParams) {
            
            var vm = this;
            vm.createLink = "/addresses/edit/";
            vm.deleteItem = deleteItem;
            vm.editItem = editItem;

            init();

            function init() {
                apiService.getAddresses()
                    .success(function (dataAdd) {
                        vm.tableParams = new NgTableParams({ count: 10 }, {data: dataAdd});
                    });
            }
    
            function deleteItem(id) {
                apiService.deleteAddress(id)
                    .success(function (data) {
                        $route.reload();
                    });
            }
    
            function editItem(id) {
                $location.path(vm.createLink + id);
            }
            

        }
    }

    angular.module("app.address").controller("AddressListController", ListController);
}