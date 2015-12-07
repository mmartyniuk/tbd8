/// <reference path='typings/angular.d.ts'/>
interface IEmployee {
    userTypes: any[],
    orderStatus: any[],
    toggleIdsCheckbox(ids: any, id: any): any,
    months: any[],
    returnThisClassValue(): Object;
}

module app.utilService {
    'use strict';

    class UserType {
        static get Constants():any {
            return {
                driver: 0,
                client: 1
            };
        }
    }

    class OrderStatus {
        static get Constants():any {
            return {
                new: 0,
                pickedUp: 1,
                droppedOff: 2,
                cancelled: 3
            };
        }
    }

    class UtilServiceCollection implements IEmployee {
        
        userTypes= [
            { name: "Driver", value: 0 },
            { name: "Client", value: 1 }
        ];
        
        orderStatus = [
            { name: "New", value: 0 },
            { name: "Picked Up", value: 1 },
            { name: "Dropped Off", value: 2 },
            { name: "Cancelled", value: 3 }
        ];
        
        toggleIdsCheckbox(ids, id) {
            var idx = ids.indexOf(id);
            if (idx != -1) {
                ids.splice(idx, 1);
            } else {
                ids.push(id);
            }
        };

        months = [
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
        returnThisClassValue() {
            return {
                userTypes: this.userTypes,
                orderStatus: this.orderStatus,
                toggleIdsCheckbox: this.toggleIdsCheckbox,
                months: this.months
            }
        }
    }

    function utilService (){
        return new UtilServiceCollection();
    }

    angular
        .module("app.utilService", [])
        .constant("userType", UserType.Constants)
        .constant("orderStatus", OrderStatus.Constants)
        .factory("utilService", utilService);
}