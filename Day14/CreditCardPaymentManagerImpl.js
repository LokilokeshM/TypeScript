"use strict";
exports.__esModule = true;
var CreditCardPaymentManagerImpl = /** @class */ (function () {
    function CreditCardPaymentManagerImpl() {
    }
    CreditCardPaymentManagerImpl.prototype.doPayment = function (paymentcreds) {
        console.log("Your Payment Credits" + paymentcreds);
    };
    CreditCardPaymentManagerImpl.prototype.getPaymentStatus = function (refNumber) {
        console.log("Your payment status is ..." + refNumber);
    };
    return CreditCardPaymentManagerImpl;
}());
var acc;
acc.doPayment("25252425");
acc.getPaymentStatus("121564316543");
