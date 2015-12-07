/// <reference path='typings/angular.d.ts'/>
/// <reference path="typings/angular-route.d.ts"/>
/// <reference path="typings/jquery.blockUI.d.ts"/>

interface RootScopeErrorList extends ng.IRootScopeService {
  errorList: any[];
}

((): void => {
    'use strict';

  angular.module("app").config(config).run(run);

  config.$inject = ["$locationProvider", "$httpProvider", "$routeProvider", "blockUIConfig"];

  function config (
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider,
    $routeProvider: ng.route.IRouteProvider,
    blockUIConfig: JQBlockUIOptions): void {
    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/", { templateUrl: "app/index.html" })
      .otherwise({ redirectTo: "/" });

    blockUIConfig.message = "<div class=\"block-ui-wrapper text-center\"><i class=\"fa fa-spinner fa-spin fa-4x\"></i></div>";

    $httpProvider.interceptors.push("httpInterceptor");
   }

  run.$inject = ["$rootScope"];

  function run ($rootScope: RootScopeErrorList): void {
      $rootScope.$on("$locationChangeSuccess", (): void => {
        $rootScope.errorList = new Array();
      });
    }
})();