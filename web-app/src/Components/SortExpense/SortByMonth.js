import React from 'react';
import './SortExpenses.scss';

function SortbyMonth(props){
    //Creating function for sortByMonth filter
    const monthHandler = (e) =>{
        props.setSortMonth(e.target.value);
    }
    
    return (
        <div className='sortexpenses' >
                <select onChange={monthHandler} name="sortbyMonth" id="">
                <option value="All">All</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
    )
};

export default SortbyMonth;