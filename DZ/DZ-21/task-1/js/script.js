'use strict'

// Задача 1.

//=============================================================================

class Client {
  constructor(id, fullName, moneyQuantity) {
    this.id = id
    this.fullName = fullName
    this.moneyQuantity = moneyQuantity
  }

  addMoney(money) {
    this.moneyQuantity += money
  }

  withdrawMoney(money) {
    this.moneyQuantity -= money
  }

  toString() {
    return `ID: ${this.id} / ПІБ: ${this.fullName} / Кількість грошей: ${this.moneyQuantity}`
  }
}

class GoldenClient extends Client {
  constructor(id, fullName, moneyQuantity, creditLimit, interestCreditFunds) {
    super(id, fullName, moneyQuantity)

    this.creditLimit = creditLimit
    this.interestCreditFunds = interestCreditFunds
  }

  addMoney(money) {
    super.addMoney(money)
  }

  withdrawMoney(money) {
    super.withdrawMoney(money)
  }

  getFineForCreditFunds() {
    return (this.creditLimit / 100) * this.interestCreditFunds
  }

  toString() {
    return (
      super.toString() +
      ` / Ліміт кредитних коштів : ${this.creditLimit} / Відсоток за використання кредитних коштів : ${this.interestCreditFunds}%`
    )
  }
}

const firstGoldenClient = new GoldenClient(1, 'John Smith', 9500, 2000, 7)
// -----
console.log(firstGoldenClient)
firstGoldenClient.addMoney(2000)
console.log(firstGoldenClient)
firstGoldenClient.withdrawMoney(5000)
console.log(firstGoldenClient)
console.log(firstGoldenClient.getFineForCreditFunds())
// -----
const userContainer = document.createElement('p')
userContainer.innerText = firstGoldenClient
document.body.append(userContainer)
