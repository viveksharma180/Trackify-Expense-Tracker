import React,{useEffect,useState} from 'react';
// import './ExpenseDate.scss';

function ExpenseDate(props) {
    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');

    useEffect(()=>{ //using useEffect to execute the getMonth function and dispaly it in li below.
        const getMonth = () => {
                const calendar = new Date(props.calendar);
                const year = calendar.getFullYear();
                const month = calendar.toLocaleString('en-US', { month: 'long' });
                const day = calendar.toLocaleString('en-US', { day: '2-digit' });
                setYear(`${year}`);
                setMonth(month);
                let int = parseInt(day,10); // for correcting offset
                setDay(`${int}`);
        }
        getMonth();
    },[props])
    return(
        <div>
            <li className="expense-date">Transaction Date: {day} {month} {year}</li> {/**Creating this component so that it can be directly imported in other components to display date. */}
        </div>
    )
};

export default ExpenseDate;