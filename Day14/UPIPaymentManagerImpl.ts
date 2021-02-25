import InterfacePayment from './InterfacePayment';
class UPIPaymentManagerImpl implements InterfacePayment
{
    accountNumber: number;
    accName: string;
    BankName: string;
    doPayment(paymentcreds: string) {
        console.log("Your Payment Credits"+paymentcreds);
    }
    getPaymentStatus(refNumber: string) {
        console.log("Your payment status is ..."+refNumber);
    }

}


let acc:UPIPaymentManagerImpl ;

acc.doPayment("25252425");
acc.getPaymentStatus("121564316543");
