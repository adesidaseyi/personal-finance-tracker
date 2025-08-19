export class ExpenseTracker {
    #Expenses;
    #maxId;
    constructor() {
        this.#Expenses = new Array();
        this.#maxId = 0;
    }

    // helper function
    //argValidator(description, amount, category, date) {

    //} //description: string; amount: number; category: string; date: string?

    addExpense(description, amount, category, date) {
        //this.argValidator(description, amount, category, date);
        
        const newId = this.#maxId++;
        
        const newExpense = {
            "id" : newId,
            "description" : description,
            "amount" : amount,
            "category" : category,
            "date" : (date)? new Date(date) : new Date(), 
        }

        this.#Expenses.push(newExpense);
        console.log(`Expense added: ${description} - ${amount} [${category}] - id: ${newExpense.id}`);
    }

    listExpenses(arr) {
        if (!arr) { arr = this.#Expenses }
        for (let i = 0; i < arr.length; i++) {
            const expense = arr[i];
            console.log(`${(i + 1)}. ${expense.description} - ${expense.amount} [${expense.category}] - id: ${expense.id}`);
        }
    }

    getTotalExpenses() {
        let totalAmount = 0;
        this.#Expenses.forEach((expense) => {
            if (typeof(expense.amount) === "string") {
                throw new Error('unable to add string value amount');
            }
            totalAmount += expense.amount;
        });
        console.log(`Total Expenses: ${totalAmount}`);
    }

    filterExpenses(category) {
        const filteredByCategory = this.#Expenses.filter((expense) => {
            return (expense.category == category);
        });
        
        this.listExpenses(filteredByCategory);
    }

    deleteExpense(id) {
        const foundIndex = this.#Expenses.findIndex((expense) => {
            return (expense.id === id);
        });

        if(foundIndex > -1) {
            this.#Expenses.splice(foundIndex, 1);
            console.log(`Expense with id: ${id} has been deleted`);
        }
        else {
            console.log(`Expense with id: ${id} does not exist`);
        }
    }

    // Optional
/*
    filterByDate(date) {
        const filteredByDate = this.#Expenses.filter((expense) => {
            expense.date === date;
        });
        
        this.listExpenses(filteredByDate);
    }

    editExpense(id, ...args) {
        const foundIndex = this.#Expenses.findIndex((expense) => {
            expense.id === id;
        });

        if(foundIndex > -1) {
        }
        else {
            console.log(`Expense with id: ${id} does not exist`);
        }
    }
*/
    formatAmount() {    //Format the amounts with commas (e.g., 10,000 instead of 10000).
        const formattedExpenses = this.#Expenses.map((expense) => {
            const formattedExpense = {
                ...expense,
                amount: expense.amount.toLocaleString(),
            }
            return formattedExpense;
        });
        this.listExpenses(formattedExpenses);
    }

}