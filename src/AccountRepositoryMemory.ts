import Account from "./Account";
import AccountRepository from "./AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {

  accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  save(account: Account) {
    this.accounts.push(account)
  }

  get(accountDocument: string): Account{
    const account =  this.accounts.find(account => account.document === accountDocument);
    if(!account){
      throw new Error("Account not found!");
    } 
    return account;
  } 

}