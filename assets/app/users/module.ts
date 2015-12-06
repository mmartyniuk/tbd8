/// <reference path='../typings/angular.d.ts'/>

(():void => {
    'use strict';

    angular.module("app.user", [
        "ngTable",
        "app.apiService",
        "app.utilService"
    ]);
})();