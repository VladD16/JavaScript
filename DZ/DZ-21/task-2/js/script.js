'use strict'

// Задача 2.

//====================================================

class Client {
  constructor(id, type, fullName, moneyQuantity) {
    this.id = id
    this.type = type
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
  constructor(
    id,
    type,
    fullName,
    moneyQuantity,
    creditLimit,
    interestCreditFunds
  ) {
    super(id, type, fullName, moneyQuantity)

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

//====================================================

const clientsList = []

const firstClient = new Client(1, 'simple', 'John Smith', 3500)
clientsList.push(firstClient)
const secondClient = new Client(2, 'simple', 'Emily Johnson', 7400)
clientsList.push(secondClient)
const thirdClient = new Client(3, 'simple', 'Sarah Davis', 11700)
clientsList.push(thirdClient)
const firstGoldenClient = new GoldenClient(
  4,
  'golden',
  'Michael Brown',
  15900,
  3500,
  7
)
clientsList.push(firstGoldenClient)
const secondGoldenClient = new GoldenClient(
  5,
  'golden',
  'David Wilson',
  22750,
  5500,
  7
)
clientsList.push(secondGoldenClient)

class Bank {
  constructor(clientsList) {
    this.clientsList = clientsList
  }

  showAllSimpleClients() {
    const simpleClients = this.clientsList.filter((el) => el.type === 'simple')
    this.generateBlock('Прості клієнти:', simpleClients)
  }

  showAllGoldenClients() {
    const goldenClients = this.clientsList.filter((el) => el.type === 'golden')
    this.generateBlock('Golden клієнти:', goldenClients)
  }

  generateBlock(title, array) {
    const titleEl = document.createElement('h2')
    titleEl.innerHTML = title
    document.body.append(titleEl)
    const ulEl = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
      const liEl = document.createElement('li')
      liEl.innerText = array[i]
      ulEl.append(liEl)
    }
    document.body.append(ulEl)
  }

  getTotalSumOfMoney() {
    return this.clientsList.reduce(
      (totalSum, el) => totalSum + el.moneyQuantity,
      0
    )
  }
}

const bank = new Bank(clientsList)
bank.showAllSimpleClients()
bank.showAllGoldenClients()
console.log(bank.getTotalSumOfMoney())
