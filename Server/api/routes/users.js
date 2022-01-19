import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

//check here for mistakes
router.route('/')
    .get(userController.index)
    .post(userController.save);

router.route('/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.remove);
    
router.route('/login') // Creating route for user login authentication verification
    .post(userController.authUser);
    
export default router;