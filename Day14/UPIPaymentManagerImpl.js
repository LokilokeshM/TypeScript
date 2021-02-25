"use strict";
exports.__esModule = true;
var UPIPaymentManagerImpl = /** @class */ (function () {
    function UPIPaymentManagerImpl() {
    }
    UPIPaymentManagerImpl.prototype.doPayment = function (paymentcreds) {
        console.log("Your Payment Credits" + paymentcreds);
    };
    UPIPaymentManagerImpl.prototype.getPaymentStatus = function (refNumber) {
        console.log("Your payment status is ..." + refNumber);
    };
    return UPIPaymentManagerImpl;
}());
var acc;
acc.doPayment("25252425");
acc.getPaymentStatus("121564316543");
