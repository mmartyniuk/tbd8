var app;
(function (app) {
    var apiService;
    (function (apiService) {
        'use strict';
        var apiServiceCollection = (function () {
            function apiServiceCollection($http) {
                this.$http = $http;
            }
            ;
            apiServiceCollection.prototype.getAddresses = function (limit, offset) {
                if (!offset) {
                    offset = 0;
                }
                if (limit) {
                    return this.$http.get("/api/Addresses?limit=" + limit + "&skip=" + offset);
                }
                else {
                    return this.$http.get("/api/Addresses?skip=" + offset);
                }
            };
            apiServiceCollection.prototype.getAddressById = function (addressId) {
                return this.$http.get("/api/Addresses/" + addressId);
            };
            apiServiceCollection.prototype.addAddress = function (item) {
                return this.$http.post("/api/Addresses", item);
            };
            apiServiceCollection.prototype.updateAddress = function (item) {
                return this.$http.put("/api/Addresses/" + item.id, item);
            };
            apiServiceCollection.prototype.deleteAddress = function (addressId) {
                return this.$http.delete("/api/Addresses/" + addressId);
            };
            apiServiceCollection.prototype.getUsers = function (limit, offset) {
                if (!offset) {
                    offset = 0;
                }
                if (limit) {
                    return this.$http.get("/api/Users?limit=" + limit + "&skip=" + offset);
                }
                else {
                    return this.$http.get("/api/Users?skip=" + offset);
                }
            };
            apiServiceCollection.prototype.getUserById = function (userId) {
                return this.$http.get("/api/Users/" + userId);
            };
            apiServiceCollection.prototype.addUser = function (item) {
                return this.$http.post("/api/Users", item);
            };
            apiServiceCollection.prototype.updateUser = function (item) {
                return this.$http.put("/api/Users/" + item.id, item);
            };
            apiServiceCollection.prototype.deleteUser = function (userId) {
                return this.$http.delete("/api/Users/" + userId);
            };
            apiServiceCollection.prototype.getOrders = function (limit, offset) {
                if (!offset) {
                    offset = 0;
                }
                if (limit) {
                    return this.$http.get("/api/Orders?limit=" + limit + "&skip=" + offset);
                }
                else {
                    return this.$http.get("/api/Orders?skip=" + offset);
                }
            };
            apiServiceCollection.prototype.getOrderById = function (orderId) {
                return this.$http.get("/api/Orders/" + orderId);
            };
            apiServiceCollection.prototype.addOrder = function (item) {
                return this.$http.post("/api/Orders", item);
            };
            apiServiceCollection.prototype.updateOrder = function (item) {
                return this.$http.put("/api/Orders/" + item.id, item);
            };
            apiServiceCollection.prototype.deleteOrder = function (orderId) {
                return this.$http.delete("/api/Orders/" + orderId);
            };
            return apiServiceCollection;
        })();
        apiService.apiServiceCollection = apiServiceCollection;
        factory.$inject = ['$http'];
        function factory($http) {
            return new apiServiceCollection($http);
        }
        angular
            .module('app.apiService', [])
            .factory('apiService', factory);
    })(apiService = app.apiService || (app.apiService = {}));
})(app || (app = {}));
//# sourceMappingURL=app.apiService.js.map