import AccountBuilder from "./AccountBuilder";
import AccountRepository from "./AccountRepositoryMemory";
import CreditCommand from "./CreditCommand";
import Publisher from "./Publisher";

export default class AccountApplicationService {

  constructor(readonly publisher: Publisher,  readonly accountRepository: AccountRepository){

  }

  create(document: string){
    const account = new AccountBuilder(document).build()
    this.accountRepository.save(account);
  }

  credit(accountDocument: string, amount: number){
    const creditComand = new CreditCommand(accountDocument, amount)
    this.publisher.publish(creditComand)
  }

  get(accountDocument: string){
    return this.accountRepository.get(accountDocument)
  }

}