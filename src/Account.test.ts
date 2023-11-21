import AccountBuilder from "./AccountBuilder"
import TransferService from "./TransferService"


test("Deve criar uma conta", function(){
  const account = new AccountBuilder("111.111.11-11")
  .setBank("033")
  .setBranch("0001")
  .setAccount("123456-7")
  .build()

  account.credit(0)
  expect(account.getBalance()).toBe(0)
})

test("Deve criar uma conta e fazer um  crédito", function(){
  const account = new AccountBuilder("111.111.11-11")
  .setBank("033")
  .setBranch("0001")
  .setAccount("123456-7")
  .build()

  account.credit(1000)
  expect(account.getBalance()).toBe(1000)
})


test("Deve criar uma conta e fazer um débito", function(){
  const account = new AccountBuilder("111.111.11-11")
    .setBank("033")
    .setBranch("0001")
    .setAccount("123456-7")
    .build()

  account.credit(1000)
  expect(account.getBalance()).toBe(1000)
  account.debit(500)
  expect(account.getBalance()).toBe(500)
})

test("Deve criar duas contas e fazer uma transferência", function(){
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

  accountFrom.credit(1000)
  accountTo.credit(500)

  const transferService = new TransferService();
  transferService.transfer(accountFrom, accountTo, 700);
  expect(accountFrom.getBalance()).toBe(300)
  expect(accountTo.getBalance()).toBe(1200)

})