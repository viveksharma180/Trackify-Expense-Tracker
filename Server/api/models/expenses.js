import Mongoose from "mongoose";
//Creating expenses schema for expense
const expenseSchema = new Mongoose.Schema({
    "title":{ //Expense Name
        type: String,
        required: "Title is required"
    },
    "category": { //Expense Category
        type: String
    },
    "amount": { //Expense Amount
        type: Number,
        required: "Amount is required"
    },
    "user_id": { //User Id of user whose expense is being saved.
        type: String,
        required: true
    },
    "transactionDate": { //Expense transaction date
        type: Date,
    },
    "createdDate": { //creation date of registering the expense
        type: Date,
        default: Date.now
    },
    "lastModifiedDate": { //updation date of registering the expense
        type: Date,
        default: Date.now
    }
});

expenseSchema.set('toJSON', {virtuals:true}); // converting to JSON format

const Expense = Mongoose.model('Expense', expenseSchema);

export default Expense;