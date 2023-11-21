import Account from "./Account";

export default class TransferService {
  
  transfer(accountFrom: Account, accountTo: Account , amount: number){
    accountFrom.debit(amount)
    accountTo.credit(amount)
  }
}