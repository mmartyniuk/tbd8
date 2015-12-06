(function () {
    'use strict';
    angular.module("app").config(config).run(run);
    config.$inject = ["$locationProvider", "$httpProvider", "$routeProvider", "blockUIConfig"];
    function config($locationProvider, $httpProvider, $routeProvider, blockUIConfig) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", { templateUrl: "app/index.html" })
            .otherwise({ redirectTo: "/" });
        blockUIConfig.message = "<div class=\"block-ui-wrapper text-center\"><i class=\"fa fa-spinner fa-spin fa-4x\"></i></div>";
        $httpProvider.interceptors.push("httpInterceptor");
    }
    run.$inject = ["$rootScope"];
    function run($rootScope) {
        $rootScope.$on("$locationChangeSuccess", function () {
            $rootScope.errorList = new Array();
        });
    }
})();
//# sourceMappingURL=app.config.js.map