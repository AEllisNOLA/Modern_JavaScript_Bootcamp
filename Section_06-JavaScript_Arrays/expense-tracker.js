const account = {
    name: 'Anthony',
    income: [],
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0

        this.expenses.forEach(function (expense, index) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function (income, index) {
            totalIncome += income.amount
        })

        totalBalance = this.getBalance(totalIncome, totalExpenses)

        return `${this.name} has a balance of $${totalBalance} with $${totalIncome} in income and $${totalExpenses} in expenses.`
    },
    getBalance: function (income, expenses) {
        return balance = income - expenses;
    }
}

account.addIncome('Weekly Paycheck', 365)
account.addExpense('Car payment', 280.00)
account.addExpense('Car insurance', 195.00)
account.addIncome('Weekly Paycheck', 380)
console.log(account.getAccountSummary())