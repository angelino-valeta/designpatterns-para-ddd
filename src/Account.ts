export default class Account {
   bank: string;
   branch: string;
   account: string
   private balance: number = 0.0


   constructor(bank: string, brach: string, account: string){
    this.bank = bank;
    this.branch = brach;
    this.account = account
   }

   public credit(balance: number){
    this.balance = balance
   }

   public getBalance(){
    return this.balance
   }
}