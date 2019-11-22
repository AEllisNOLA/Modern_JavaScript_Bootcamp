let myAccount = {
    name: 'Anthony',
    expenses: 0,
    income: 0
}



let addExpense = function (account, amount) {
    account.expenses += amount
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    balance = account.income - account.expenses
    return `${account.name} has a balance of ${balance} with an income of ${account.income} and expenses of ${account.expenses}.`
}



addIncome(myAccount, 2000)

addExpense(myAccount, 2.50)
addExpense(myAccount, 160)


console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

