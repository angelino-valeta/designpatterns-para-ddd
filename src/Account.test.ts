import AccountBuilder from "./AccountBuilder"
import CreditCommand from "./CreditCommand"
import DebitCommand from "./DebitCommand"
import TransferCommand from "./TransferCommand"
import TransferService from "./TransferService"


test("Deve criar uma conta", function () {
  const account = new AccountBuilder("111.111.11-11")
    .setBank("033")
    .setBranch("0001")
    .setAccount("123456-7")
    .build()

  //account.credit(0)
  const creditCommand = new CreditCommand(account, 0)
  creditCommand.execute()
  expect(account.getBalance()).toBe(0)
})

test("Deve criar uma conta e fazer um  crédito", function () {
  const account = new AccountBuilder("111.111.11-11")
    .setBank("033")
    .setBranch("0001")
    .setAccount("123456-7")
    .build()


  // account.credit(1000)
  const creditCommand = new CreditCommand(account, 1000)
  creditCommand.execute();
  expect(account.getBalance()).toBe(1000)
})


test("Deve criar uma conta e fazer um débito", function () {
  const account = new AccountBuilder("111.111.11-11")
    .setBank("033")
    .setBranch("0001")
    .setAccount("123456-7")
    .build()

  //account.credit(1000)
  const creditCommand = new CreditCommand(account, 1000)
  creditCommand.execute()
  expect(account.getBalance()).toBe(1000)
  const debitCommand = new DebitCommand(account, 500)
  debitCommand.execute()
  //account.debit(500)
  expect(account.getBalance()).toBe(500)
})

test("Deve criar duas contas e fazer uma transferência", function () {
  const accountFrom = new AccountBuilder("111.111.11-11")
    .setBank("003")
    .setBranch("0001")
    .setAccount("123456-7")
    .build();

  const accountTo = new AccountBuilder("222.222.22-22")
    .setBank("003")
    .setBranch("0001")
    .setAccount("987654-3")
    .build()

  // accountFrom.credit(1000)
  const creditCommandFrom = new CreditCommand(accountFrom, 1000);
  creditCommandFrom.execute()
  // accountTo.credit(500)
  const creditCommadTo = new CreditCommand(accountTo, 500)
  creditCommadTo.execute()

  // const transferService = new TransferService();
  // transferService.transfer(accountFrom, accountTo, 700);

  const transferCommand = new TransferCommand(accountFrom, accountTo, 700)
  transferCommand.execute()

  expect(accountFrom.getBalance()).toBe(300)
  expect(accountTo.getBalance()).toBe(1200)

})