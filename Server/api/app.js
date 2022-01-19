import express from "express";
import mongoose from "mongoose";
import path from 'path';
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import model from "./models/index.js"; //Importing for Initialization.
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://localhost:27017/expensesdb');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
routes(app); // Initialize routes
export default app;