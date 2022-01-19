import express from "express";
import * as expenseController from "../controllers/expenseController.js"; //Importing expense Controller

const router = express.Router();

//check here for mistakes
router.route('/expenses')
    .get(expenseController.index)
    .post(expenseController.save);

router.route('/expenses/:id')
    .get(expenseController.get)
    .put(expenseController.update)
    .delete(expenseController.remove);
    
/**
 * creating route for getting expenses for particular user
 *
 */

router.route('/expenses/user/:id') 
    .get(expenseController.getByUser);

export default router;