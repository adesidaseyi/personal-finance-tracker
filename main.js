import { ExpenseTracker } from "./expense-tracker.js"

const myExpenseTracker = new ExpenseTracker();

myExpenseTracker.addExpense("Lunch", 2000, "Food");

myExpenseTracker.addExpense("Breakfast", 3000, "Food");

myExpenseTracker.addExpense("Dinner", 4000, "Food");

myExpenseTracker.addExpense("Airtime", 1000, "Bills");

myExpenseTracker.listExpenses();

myExpenseTracker.getTotalExpenses();

//myExpenseTracker.filterExpenses("Food");

//myExpenseTracker.formatAmount().listExpenses();