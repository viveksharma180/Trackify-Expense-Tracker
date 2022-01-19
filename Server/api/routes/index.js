import expenseRouter from "./expense.js";
import userRouter from "./users.js";

export default (app) => {
    app.use('/',expenseRouter);
    app.use('/users',userRouter);
}