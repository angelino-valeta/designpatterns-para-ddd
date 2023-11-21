import AccountBuilder from "./AccountBuilder"


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