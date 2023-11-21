import Account from "./Account"

test("Deve criar uma conta ", function(){
  const account = new Account("033", "011", "98757-9")
  account.credit(1000)
  expect(account.getBalance()).toBe(1000)
})