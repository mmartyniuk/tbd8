
(function () {
    "use strict";

    angular.module("app.address").controller("AddressListController", ListController);

    ListController.$inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];

    function ListController($location, $route, apiService, utilService, NgTableParams) {
        var vm = this;
        vm.createLink = "/addresses/edit";
        vm.deleteItem = deleteItem;
        vm.editItem = editItem;

        init();

        function init() {
            apiService.getAddresses()
                .success(function (data) {
                    vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                });
        }

        function deleteItem(id) {
            apiService.deleteAddress(id)
                .success(function (data) {
                    $route.reload();
                });
        }

        function editItem(id) {
            $location.path("/addresses/edit/" + id);
        }
    }
}());
