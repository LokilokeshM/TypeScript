export default interface Payments{
    accountNumber:number;
    accName:string;
    BankName:string;

    doPayment(paymentcreds:string);
    getPaymentStatus(refNumber : string);

}