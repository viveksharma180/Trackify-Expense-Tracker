import React,{useEffect,useState} from 'react';
import './ExpenseSummary.scss';

function ExpenseSummary(props) {
    //Using useState for creating functionalities
    const [totalExpense,setTotalExpense] = useState('');

    useEffect(()=>{
        const getTotalExpense = () => {
            let sum = 0;
            props.expenses.forEach((expense) => 
            sum = sum + expense.amount)
            sum = sum.toFixed(2); // setting decimal points limit to 2
            setTotalExpense(sum);
            return sum;
        }
        getTotalExpense();
    },[props.expenses])

    return (
        <div className="Summary">
            <p>Your total expenses are: ${totalExpense}</p>
            <p></p>
        </div>
    )
};

export default ExpenseSummary;