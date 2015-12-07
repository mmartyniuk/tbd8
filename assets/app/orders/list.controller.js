var app;
(function (app) {
    var address;
    (function (address) {
        'use strict';
        var ListController = (function () {
            function ListController($location, $route, apiService, utilService, NgTableParams) {
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
            ListController.$inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];
            return ListController;
        })();
        angular.module("app.order").controller("OrderListController", ListController);
    })(address = app.address || (app.address = {}));
})(app || (app = {}));
//# sourceMappingURL=list.controller.js.map