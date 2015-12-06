/// <reference path='typings/angular.d.ts'/>

module app.apiService {
    'use strict';
    
    class apiServiceCollection {
        constructor(private $http: ng.IHttpService) {};

        getAddresses(limit: any, offset?: any) {
            if (!offset) {
                offset = 0;
            }
            if (limit) {
                return this.$http.get("/api/Addresses?limit=" + limit + "&skip=" + offset);
            } else {
                return this.$http.get("/api/Addresses?skip=" + offset);
            }
        }
        getAddressById(addressId: any) {
            return this.$http.get("/api/Addresses/" + addressId);
        }
        addAddress(item: any) {
            return this.$http.post("/api/Addresses", item);
        }
        updateAddress(item: any) {
            return this.$http.put("/api/Addresses/" + item.id, item);
        }
        deleteAddress(addressId: any) {
            return this.$http.delete("/api/Addresses/" + addressId);
        }
        getUsers(limit: any, offset?: any) {
            if (!offset) {
                offset = 0;
            }
            if (limit) {
                return this.$http.get("/api/Users?limit=" + limit + "&skip=" + offset);
            } else {
                return this.$http.get("/api/Users?skip=" + offset);
            }
        }
        getUserById(userId: any) {
            return this.$http.get("/api/Users/" + userId);
        }
        addUser(item: any) {
            return this.$http.post("/api/Users", item);
        }
        updateUser(item: any) {
            return this.$http.put("/api/Users/" + item.id, item);
        }
        deleteUser(userId: any) {
            return this.$http.delete("/api/Users/" + userId);
        }
        getOrders(limit: any, offset?: any) {
            if (!offset) {
                offset = 0;
            }
            if (limit) {
                return this.$http.get("/api/Orders?limit=" + limit + "&skip=" + offset);
            } else {
                return this.$http.get("/api/Orders?skip=" + offset);
            }
        }
        getOrderById(orderId: any) {
            return this.$http.get("/api/Orders/" + orderId);
        }
        addOrder(item: any) {
            return this.$http.post("/api/Orders", item);
        }
        updateOrder(item: any) {
            return this.$http.put("/api/Orders/" + item.id, item);
        }
        deleteOrder(orderId: any) {
            return this.$http.delete("/api/Orders/" + orderId);
        }
    }

    factory.$inject = ['$http'];

    function factory ($http: ng.IHttpService){
        return new apiServiceCollection($http);
    }

    angular
        .module('app.apiService', [])
        .factory('apiService', factory);
}