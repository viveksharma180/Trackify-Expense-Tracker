import React, { useLayoutEffect, useRef, useState } from 'react';
import './PieChart.scss';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts"; //import amcharts
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function PieChart(props) {
    //Creating useState for functionalities
    const [yearAll, setYearAll] = useState(true);
    //Creating yearHandler to diplay year from filter
    const yearAllHandler = () => {
        if (`${props.sortYear}` !== 'All') {
            setYearAll(false);
        } else {
            setYearAll(true);
        }
    }

    //Creating function to convert data to desire format for input of graph
    const getAmountMonthWise = () => {
        let amount1 = [0, 0, 0, 0, 0, 0] // array - each place represents respective category in specific order
        let x = 0;
        props.pieExpenses.forEach((expense) => {
            switch (expense.category) {
                case 'Miscellaneous':
                    x = amount1[0];
                    x = x + expense.amount;
                    amount1[0] = x;
                    break;
                case 'Entertainment':
                    x = amount1[1];
                    x = x + expense.amount;
                    amount1[1] = x;
                    break;
                case 'Food and Drink':
                    x = amount1[2];
                    x = x + expense.amount;
                    amount1[2] = x;
                    break;
                case 'Transportation':
                    x = amount1[3];
                    x = x + expense.amount;
                    amount1[3] = x;
                    break;
                case 'Utilities':
                    x = amount1[4];
                    x = x + expense.amount;
                    amount1[4] = x;
                    break;
                case 'Home':
                    x = amount1[5];
                    x = x + expense.amount;
                    amount1[5] = x;
                    break;
            }

        })
        return amount1;
    }

    const chart = useRef(null);

    useLayoutEffect(() => { // using layoutEffect for displaying graph
        yearAllHandler();
        const amountData = getAmountMonthWise();
        let x = am4core.create("pieChartdiv", am4charts.PieChart);

        x.paddingRight = 20;

        x.data = [{
            "category": "Miscellaneous",
            "amount": `${amountData[0]}`
        }, {
            "category": "Entertainment",
            "amount": `${amountData[1]}`
        }, {
            "category": "Food and Drink",
            "amount": `${amountData[2]}`
        }, {
            "category": "Transportation",
            "amount": `${amountData[3]}`
        }, {
            "category": "Utilities",
            "amount": `${amountData[4]}`
        }, {
            "category": "Home",
            "amount": `${amountData[5]}`
        }]

        //Creating PieSeries
        var pieSeries = x.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "amount";
        pieSeries.dataFields.category = "category";
        chart.current = x;

        return () => {
            x.dispose();
        };
    }, [getAmountMonthWise, props])

    return (
        <div>
            {/**To display in case no year is selected */}
            {yearAll ? 
                <p>
                    Select Year to display Month-Wise Summary.
                </p> :
                <div>
                    <p>{props.sortMonth} {props.sortYear} Expenses</p>
                    <div id="pieChartdiv" className="chartdiv"></div>
                </div>
            }

        </div>
    )
}

export default PieChart;