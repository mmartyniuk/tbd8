var app;
(function (app) {
    var order;
    (function (order) {
        'use strict';
        var HeaderController = (function () {
            function HeaderController($rootScope) {
                var vm = this;
                vm.isCollapsed = true;
                $rootScope.$on("$locationChangeSuccess", function () {
                    vm.isCollapsed = true;
                });
            }
            HeaderController.$inject = ["$rootScope"];
            return HeaderController;
        })();
        angular.module("app").controller("HeaderController", HeaderController);
    })(order = app.order || (app.order = {}));
})(app || (app = {}));
//# sourceMappingURL=header.controller.js.map