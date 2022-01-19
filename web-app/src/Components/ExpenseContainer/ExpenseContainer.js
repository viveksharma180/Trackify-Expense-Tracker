import React, { useState, useEffect } from 'react';
import './ExpenseContainer.scss';
import ExpenseComponent from '../ExpenseComponent/ExpenseComponent';
import SortbyMonth from '../SortExpense/SortByMonth';
import SortbyYear from '../SortExpense/SortByYear';
import ExpenseSummary from '../ExpenseSummary/ExpenseSummary';
import Charts from '../Charts/Charts';

function ExpenseContainer(props) {
    //Creating user states for various functions
    const [sortMonth, setSortMonth] = useState('All');
    const [sortYear, setSortYear] = useState('All');
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [tempExpenses, setTempExpenses] = useState([]);
    const [graphExpenses, setGraphExpenses] = useState([]);
    const [expenseState, setExpenseState] = useState(true);
    const [summaryState, setSummaryState] = useState(false);
    const [monthViewState, setMonthViewState] = useState(true);
    const [yearViewState, setYearViewState] = useState(true);
    const [viewMonthWiseButton, setViewMonthWiseButton] = useState(false);
    const [viewYearWiseButton, setViewYearWiseButton] = useState(false);
    const [viewOverAllButton, setViewOverAllButton] = useState(false);
    const [viewPieGraph, setViewPieGraph] = useState(true);
    const [viewBarGraph, setViewBarGraph] = useState(false);
    const [viewLineGraph, setViewLineGraph] = useState(false);

    //Creating view handler for expense section
    const expenseViewHandler = () => {
        setExpenseState(true);
        setMonthViewState(true);
        setSummaryState(false);
        setViewMonthWiseButton(false);
        setViewYearWiseButton(false);
        setViewOverAllButton(false);
    }

    //Creating view handler for summary(Graphs) section
    const summaryViewHandler = () => {
        setExpenseState(false);
        setMonthViewState(true);
        setSummaryState(true);
        setViewMonthWiseButton(true);
        setViewYearWiseButton(true);
        setViewOverAllButton(true);
    }

    //Creating view month wise summary/graph for expense section
    const viewMonthWiseHandler = () => {
        setMonthViewState(true);
        setViewBarGraph(false);
        setViewPieGraph(true);
        setViewLineGraph(false);
    }

    //Creating view year wise summary/graph for expense section
    const viewYearWiseHandler = () => {
        setMonthViewState(false);
        setViewBarGraph(true);
        setViewPieGraph(false);
        setViewLineGraph(false);
    }

    //Creating view all-over wise summary/graph for expense section
    const viewOverAllHandler = () => {
        setMonthViewState(false);
        setViewBarGraph(false);
        setViewPieGraph(false);
        setViewLineGraph(true);
    }

    //Creating function to convert transacation Date into Month String
    const getMonthString = (expense) => {
        const calendar = new Date(expense.transactionDate);
        const month = calendar.toLocaleString('en-US', { month: 'long' });
        return month;
    }
    //Creating function to convert transacation Date into Year String
    const getYear = (expense) => {
        const calendar = new Date(expense.transactionDate);
        const year = calendar.getFullYear();
        return year;
    }

    useEffect(() => { // using react useEffect to display graphs
        const filteredExpense = () => { // Creating a filter function for sort buttons to diplay expenses in general as well as in graphs section
            setTempExpenses([...props.expenses]);
            props.expenses.forEach((expense) => {
                const monthStrin = getMonthString(expense);
                const yearStrin = getYear(expense);
                if (sortMonth === 'All' && sortYear === 'All') { //Default condition
                    setFilteredExpenses([...props.expenses]);
                }
                else if (monthStrin !== sortMonth && sortYear === 'All') { // if expense.transactiondate != sort.filter.date && sort year is selected to all
                    setFilteredExpenses(tempExpenses.filter((el) => getMonthString(el) === sortMonth));
                }
                else if (sortMonth === 'All') { 
                    setFilteredExpenses(tempExpenses.filter((el) => `${getYear(el)}` === `${sortYear}`));
                }
                else if (monthStrin !== sortMonth) {
                    setFilteredExpenses(tempExpenses.filter((el) => `${getYear(el)}` === `${sortYear}` && getMonthString(el) === sortMonth));
                }
                setGraphExpenses(tempExpenses.filter((el) => `${getYear(el)}` === `${sortYear}`));
            })
        }
        filteredExpense();
    }, [sortMonth, sortYear, props]) //Setting dependencies for refresh

    return (
        <div className="expense-container">
            <div>
                <ExpenseSummary expenses={filteredExpenses} setExpenses={setFilteredExpenses} />
            </div>
            <div className="sort-container">
                <div>Sort</div>
                {monthViewState ? <SortbyMonth setSortMonth={setSortMonth} /> : null}
                {yearViewState ? <SortbyYear setSortYear={setSortYear} /> : null}
            </div>
            <div className="display-expenses-or-summary">
                <button onClick={expenseViewHandler} >Expenses</button>
                <button onClick={summaryViewHandler} >Summary</button>
            </div>
            <div className="display-expenses-or-summary">
                {viewMonthWiseButton ? <button onClick={viewMonthWiseHandler}>View Month-Wise Summary</button> : null}
                {viewYearWiseButton ? <button onClick={viewYearWiseHandler} >View Year-Wise Summary</button> : null}
                {viewOverAllButton ? <button onClick={viewOverAllHandler} >View Over-All Summary</button> : null}
                
            </div>
            {summaryState ? <Charts props={graphExpenses} allExpenses={props.expenses} viewPieGraph={viewPieGraph} viewLineGraph={viewLineGraph} viewBarGraph={viewBarGraph} pieExpenses={filteredExpenses} sortYear={sortYear} sortMonth={sortMonth} /> : null}
            {expenseState ?
                <ul className="expense-list">
                    {/* Mapping each expense with expense class. */}
                    {filteredExpenses.map((expense) => (
                        <ExpenseComponent
                            setExpenses={props.setExpenses}
                            expenses={filteredExpenses}
                            key={expense.id}
                            expense={expense}
                            title={expense.title}
                            category={expense.category}
                            amount={expense.amount}
                            transactionDate={expense.transactionDate} />
                    ))}
                </ul> : null}
            <div>
            </div>
        </div>
    )
};

export default ExpenseContainer;
