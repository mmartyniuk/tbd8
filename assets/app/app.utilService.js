var app;
(function (app) {
    var utilService;
    (function (utilService_1) {
        'use strict';
        var UserType = (function () {
            function UserType() {
            }
            Object.defineProperty(UserType, "Constants", {
                get: function () {
                    return {
                        driver: 0,
                        client: 1
                    };
                },
                enumerable: true,
                configurable: true
            });
            return UserType;
        })();
        var OrderStatus = (function () {
            function OrderStatus() {
            }
            Object.defineProperty(OrderStatus, "Constants", {
                get: function () {
                    return {
                        new: 0,
                        pickedUp: 1,
                        droppedOff: 2,
                        cancelled: 3
                    };
                },
                enumerable: true,
                configurable: true
            });
            return OrderStatus;
        })();
        var UtilServiceCollection = (function () {
            function UtilServiceCollection() {
                this.userTypes = [
                    { name: "Driver", value: 0 },
                    { name: "Client", value: 1 }
                ];
                this.orderStatus = [
                    { name: "New", value: 0 },
                    { name: "Picked Up", value: 1 },
                    { name: "Dropped Off", value: 2 },
                    { name: "Cancelled", value: 3 }
                ];
                this.months = [
                    { name: "January", value: 1 },
                    { name: "February", value: 2 },
                    { name: "March", value: 3 },
                    { name: "April", value: 4 },
                    { name: "May", value: 5 },
                    { name: "June", value: 6 },
                    { name: "July", value: 7 },
                    { name: "August", value: 8 },
                    { name: "September", value: 9 },
                    { name: "October", value: 10 },
                    { name: "November", value: 11 },
                    { name: "December", value: 12 }
                ];
            }
            UtilServiceCollection.prototype.toggleIdsCheckbox = function (ids, id) {
                var idx = ids.indexOf(id);
                if (idx != -1) {
                    ids.splice(idx, 1);
                }
                else {
                    ids.push(id);
                }
            };
            ;
            UtilServiceCollection.prototype.returnThisClassValue = function () {
                return {
                    userTypes: this.userTypes,
                    orderStatus: this.orderStatus,
                    toggleIdsCheckbox: this.toggleIdsCheckbox,
                    months: this.months
                };
            };
            return UtilServiceCollection;
        })();
        utilService_1.UtilServiceCollection = UtilServiceCollection;
        function utilService() {
            return new UtilServiceCollection();
        }
        angular
            .module("app.utilService", [])
            .constant("userType", UserType.Constants)
            .constant("orderStatus", OrderStatus.Constants)
            .factory("utilService", utilService);
    })(utilService = app.utilService || (app.utilService = {}));
})(app || (app = {}));
//# sourceMappingURL=app.utilService.js.map