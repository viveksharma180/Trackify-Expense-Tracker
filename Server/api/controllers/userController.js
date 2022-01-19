import * as userService from "../services/userService.js";
import User from "../models/users.js";

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
export const index = async(request,response) => {
    try {
        const expenses = await userService.search();
        response.status(200);
        response.json(expenses);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/**
 * Save Function
 * @param {*} request 
 * @param {*} response 
 */

export const save = async(request,response) => {
    try {
        const emailExists = await User.findOne({ email: request.body.email });
        if(emailExists){
            response.status(400);
            throw new Error("Email already exists");
        } else{
        const user = {...request.body}; // shallow clone
        const newUser = await userService.create(user);
        response.status(200);
        response.json(newUser);
        }
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};
/**
 * Created Get function for user
 * @param {*} request 
 * @param {*} response 
 */

export const get = async(request,response) => {
    try {
        const id = request.params.id;
        const expense = await userService.get(id);
        response.status(200);
        response.json(expense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};
/**
 * Created update function
 * @param {*} request 
 * @param {*} response 
 */
export const update = async(request,response) => {
    try {
        const id = request.params.id;
        const expense = {...request.body,_id: id};
        const updatedExpense = await userService.update(expense);
        response.status(200);
        response.json(updatedExpense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

/** 
 * created Remove function
 * @param {*} request 
 * @param {*} response 
 */

export const remove = async (request,response) => {
    try {
        const id = request.params.id;
        const expense = await userService.remove(id);
        response.status(200);
        response.json(expense);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
}

/**
 * creating authentication for user.
 * @param {*} request 
 * @param {*} response 
 */
export const authUser = async (request,response) => { 
    try {
        const {email, password } = request.body;
        const user = await User.findOne({ email: request.body.email });
        if(user && (await userService.matchPassword(user,password))){
            response.status(200);
            response.json({
                user
            });
        } else{
            response.status(400);
            throw new Error("Invalid credentials");
        }
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
}

