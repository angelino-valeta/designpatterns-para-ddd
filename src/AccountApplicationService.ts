import AccountBuilder from "./AccountBuilder";
import AccountRepository from "./AccountRepositoryMemory";

export default class AccountApplicationService {

  constructor(readonly accountRepository: AccountRepository){

  }

  create(document: string){
    const account = new AccountBuilder(document).build()
    this.accountRepository.save(account);
  }

}