
(function () {
    "use strict";

    angular.module("app.address").controller("AddressEditController", EditController);

    EditController.$inject = ["$routeParams", "$location", "apiService", "utilService"];

    function EditController($routeParams, $location, apiService, utilService) {
        var vm = this;

        vm.item = {
        };
        vm.updateItem = updateItem;
        vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;

        init();

        function init() {
            if (!$routeParams.id)
                return;

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
}());
