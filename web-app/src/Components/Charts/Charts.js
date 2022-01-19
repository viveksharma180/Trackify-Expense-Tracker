import React from 'react';
import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import LineGraph from '../LineGraph/LineGraph';

function Chart(props) { // Creating a component container for every graph.
    return (
        <div>
            <div> {/**Line Graph */}
                {props.viewLineGraph ? <LineGraph allExpenses={props.allExpenses} sortMonth={props.sortMonth} sortYear={props.sortYear} /> : null}
            </div> 
            <div>{/**Pie Graph */}
                {props.viewPieGraph ? <PieChart props={props} pieExpenses={props.pieExpenses} sortMonth={props.sortMonth} sortYear={props.sortYear} /> : null}
            </div>
            <div>{/**Stacked Graph */}
                {props.viewBarGraph ? <BarChart props={props} sortMonth={props.sortMonth} sortYear={props.sortYear} /> : null}
            </div>
        </div>
    )
};

export default Chart;