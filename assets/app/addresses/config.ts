/// <reference path='../typings/angular.d.ts'/>
/// <reference path="../typings/angular-route.d.ts"/>

((): void => {
    'use strict';

angular.module("app.address").config(config);

config.$inject = ["$routeProvider", "$locationProvider"];

  function config (
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider): void {

    $routeProvider
      .when("/addresses", { templateUrl: "app/addresses/list.html", controller: "AddressListController", controllerAs: "vm" })
      .when("/addresses/edit/:id?", { templateUrl: "app/addresses/edit.html", controller: "AddressEditController", controllerAs: "vm" })
      .otherwise({ redirectTo: "/" });
   }

})();