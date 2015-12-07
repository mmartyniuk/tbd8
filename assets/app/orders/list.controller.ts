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
        tableParams: Object;
        createLink: string;

        static $inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];

        constructor($location: ng.ILocationService,
        $route: ng.route.IRouteService,
        apiService: app.apiService.apiServiceCollection,
        utilService: app.utilService.UtilServiceCollection,
        NgTableParams: ng.ngtable.ITableParams) {
            
            var vm = this;
            vm.createLink = "/orders/edit";
            vm.deleteItem = deleteItem;
            vm.editItem = editItem;

            init();

            function init() {
                apiService.getOrders()
                    .success(function (data) {
                        vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                    });
            }
    
            function deleteItem(id) {
                apiService.deleteOrder(id)
                    .success(function (data) {
                        $route.reload();
                    });
            }
    
            function editItem(id) {
                $location.path(vm.createLink + id);
            }
            

        }
    }

    angular.module("app.order").controller("OrderListController", ListController);
}