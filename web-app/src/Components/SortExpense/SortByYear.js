import React from 'react';
import './SortExpenses.scss';

function SortbyYear(props){
    //Creating function for sortByYear filter
    const yearHandler = (e) =>{
        props.setSortYear(e.target.value);
    }
    return (
        <div className='sortexpenses'>
                <select onChange={yearHandler} name="sortbyYear" id="">
                    <option value="All">All</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
    )
};

export default SortbyYear;