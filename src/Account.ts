import AccountBuilder from "./AccountBuilder";

export default class Account {
   bank: string | undefined;
   branch: string | undefined;
   account: string | undefined;
   document: string | undefined;
   balance: number;

   constructor(accountBuilder: AccountBuilder){
    this.bank = accountBuilder.bank;
    this.branch = accountBuilder.branch;
    this.account = accountBuilder.account
    this.document = accountBuilder.document
    this.balance = 0
   }

   public credit(amount: number){
    this.balance += amount
   }

   public debit(amount: number){
    this.balance -= amount
   }

   public getBalance(){
    return this.balance
   }
} 