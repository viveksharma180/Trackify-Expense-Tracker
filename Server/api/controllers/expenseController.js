import * as expenseService from "../services/expenseService.js";


export const index = async(request,response) => {
    try {
        const expenses = await expenseService.search();
        response.status(200);
        response.json(expenses);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/**
 * Save Function for expenses
 * @param {*} request 
 * @param {*} response 
 */

export const save = async(request,response) => {
    try {
        const expense = {...request.body}; // shallow clone
        const newExpense = await expenseService.create(expense);
        response.status(200);
        response.json(newExpense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/**
 * Created Get function for expenses
 * @param {*} request 
 * @param {*} response 
 */

export const get = async(request,response) => {
    try {
        const id = request.params.id;
        const expense = await expenseService.get(id);
        response.status(200);
        response.json(expense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/**
 * Created update function for expenses
 * @param {*} request 
 * @param {*} response 
 */

export const update = async(request,response) => {
    try {
        const id = request.params.id;
        const expense = {...request.body,_id: id};
        console.log(expense);
        const updatedExpense = await expenseService.update(expense);
        response.status(200);
        response.json(updatedExpense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/** 
 * created Delete function
 * @param {*} request 
 * @param {*} response 
 */

export const remove = async (request,response) => {
    try {
        const id = request.params.id;
        const expense = await expenseService.remove(id);
        response.status(200);
        response.json(expense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
}

/**
 * function to getByuserId
 * @param {*} request 
 * @param {*} response 
 */
export const getByUser = async(request,response) => {
    try {
        const id = request.params.id;
        const expense = await expenseService.getByUser(id);
        response.status(200);
        response.json(expense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};