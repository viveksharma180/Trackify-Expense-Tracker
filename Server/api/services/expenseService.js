import Expense from "../models/expenses.js";


/**
 * get all the expenses
 * sorting on the transaction date 
 * @param {*} params 
 * @returns 
 */

export const search = (params) => {
    const promise = Expense.find({params}).sort('-transactionDate').exec();
    return promise;
};

/**
 * Create new expenses 
 * @param {*} expense 
 * @returns 
 */

export const create = (expense) => {
    const newExpense = new Expense(expense);
    return newExpense.save();
};

/**
 * get expenses by the id
 * @param {*} id 
 * @returns 
 */

export const get = (id) => {
    const promise = Expense.findById(id).exec();
    return promise;
};

/**
 * get expenses by the user id
 * @param {*} id 
 * @returns 
 */

export const getByUser = (id) => {
    const promise = Expense.find({user_id: id}).sort('-transactionDate').exec();
    return promise;
};

/**
 * find id and update expense
 * @param {*} expense 
 * @returns 
 */

export const update = (expense) => {
    expense._id = expense.id;
    expense.lastModifiedDate = Date.now();
    const promise = Expense.findByIdAndUpdate({_id: expense.id}, expense, {new:true}).exec();
    return promise;
};

/**
 * Remove Expenses
 * @param {*} id 
 * @returns 
 */
export const remove = (id) => {
    const promise = Expense.findByIdAndDelete({_id: id}).exec();
    return promise;
};
