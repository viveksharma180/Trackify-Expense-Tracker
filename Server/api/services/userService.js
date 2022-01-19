import User from "../models/users.js";
import bcrypt from "bcryptjs";


/**
 * get all the users
 * @param {*} params 
 * @returns 
 */
export const search = (params = {}) => {
    const promise = User.find(params).exec();
    return promise;
};

/**
 * Create new user 
 * @param {*} user 
 * @returns 
 */
export const create = (user) => {
    const newUser = new User(user);
    return newUser.save();
};

/**
 * Find user by id
 * @param {*} id 
 * @returns 
 */
export const get = (id) => {
    const promise = User.findById(id).exec();
    return promise;
};

/**
 * Update user profile
 * @param {*} user 
 * @returns 
 */
export const update = (user) => {
    user._id = user.id;
    user.lastModifiedDate = Date.now();
    const promise = User.findByIdAndUpdate({_id: user.id}, user, {new:true}).exec();
    return promise;
};

/**
 * delete user 
 * @param {*} id 
 * @returns 
 */
export const remove = (id) => {
    const promise = User.findByIdAndDelete({_id: id}).exec();
    return promise;
};

/**
 * Match password entered 
 * used bcrypt.compare method to compare
 * @param {*} user 
 * @param {*} enteredPassword 
 * @returns 
 */
export const matchPassword = async (user,enteredPassword) => {
    const promise = await bcrypt.compare(enteredPassword, user.password);
    return promise;
};
