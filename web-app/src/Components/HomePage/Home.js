import React, { useState, useEffect } from 'react';
import './home.scss';
import Navbar from '../NavBar/Navbar';
import * as fetchService from '../../services/fetchService';
import ExpenseContainer from '../ExpenseContainer/ExpenseContainer';
import { useNavigate } from "react-router-dom";
import FormMui from '../ExpenseForm/FormMui';


function Home() {

  // Creating useStates
  const [title, setTitle] = useState(''); // for title
  const [category, setCategory] = useState('Miscellaneous'); // for category
  const [amount, setAmount] = useState(''); // for amount
  const [transactionDate, setTransactionDate] = useState(''); //for transaction date
  const [expenses, setExpenses] = useState([]); // for whole expenses
  const [updateExpenses, setUpdateExpenses] = useState(false);

  const navigate = useNavigate();

  useEffect(() => { // Creating useEffect to execute functions
    setUpdateExpenses(false);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const getAllExpenses = async () => {
      if(userInfo){ // if userInfo is present in localdata, then it proceeds to fetch data from server through user id in local storage

      
      const request = {
        id: userInfo.user._id,
      }
      const allExpenses = await fetchService.getData(request); //fetching expenses for particular user
      if (fetchService.getData) {
        setExpenses(allExpenses)
      }
    };
  }
    getAllExpenses();
  }, [updateExpenses, setUpdateExpenses]); //dependencies to fetch data again if these changes


  return (
    <div className="App">
      <Navbar />
      <div className='AppExpenseContainerDiv'>
        <h1></h1>
        <div>
          <FormMui setUpdateExpenses={setUpdateExpenses} title={title} setTitle={setTitle} category={category} setCategory={setCategory} amount={amount} setAmount={setAmount} transactionDate={transactionDate} setTransactionDate={setTransactionDate} expenses={expenses} setExpenses={setExpenses} />
          <ExpenseContainer expenses={expenses} setExpenses={setExpenses} />
        </div>
      </div>
    </div>
  );
}

export default Home;
