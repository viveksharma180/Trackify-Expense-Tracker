import React, { useLayoutEffect, useRef, useState } from 'react';
import './BarChart.scss';
import * as am4core from "@amcharts/amcharts4/core"; // importing amcharts
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated); // Using amcharts theme

function BarChart(props) {
    const [yearHeadingDispllay, setYearHeadingDispllay] = useState(true); // Creating useState for displaying heading of month and year according to filter selected

    const yearHeadingHandler = () => { // Creating function to inform user to select a year to display graph.
        if (`${props.sortYear}` === 'All') {
            setYearHeadingDispllay(true);
        } else {
            setYearHeadingDispllay(false);
        }
    }

    const getMonthString = (expense) => { // Converting the Month as String from transaction date to convert data according to month wise.
        const calendar = new Date(expense.transactionDate);
        const month = calendar.toLocaleString('en-US', { month: 'long' });
        return month;
    }

    const getAmountMonthWise = () => { // Creating a function to display to get total amount each month wise for selected year.
        let amount1 = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
        //Creating a 2-D array, each sub-array represents month in ascending order and each element inside sub-array represents each category in specific order.
        let x = 0;
        props.props.props.forEach((expense) => { // Getting input from props
            const monthStrin = getMonthString(expense); 
            switch (monthStrin) {
                case 'January': //Switch case for matching the month
                    switch (expense.category) { //Switch case for matching the categories
                        case 'Miscellaneous':
                            x = amount1[0][0];
                            x = x + expense.amount;
                            amount1[0][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[0][1];
                            x = x + expense.amount;
                            amount1[0][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[0][2];
                            x = x + expense.amount;
                            amount1[0][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[0][3];
                            x = x + expense.amount;
                            amount1[0][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[0][4];
                            x = x + expense.amount;
                            amount1[0][4] = x;
                            break;
                        case 'Home':
                            x = amount1[0][5];
                            x = x + expense.amount;
                            amount1[0][5] = x;
                            break;
                    }
                    break;
                case 'February'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[1][0];
                            x = x + expense.amount;
                            amount1[1][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[1][1];
                            x = x + expense.amount;
                            amount1[1][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[1][2];
                            x = x + expense.amount;
                            amount1[1][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[1][3];
                            x = x + expense.amount;
                            amount1[1][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[1][4];
                            x = x + expense.amount;
                            amount1[1][4] = x;
                            break;
                        case 'Home':
                            x = amount1[1][5];
                            x = x + expense.amount;
                            amount1[1][5] = x;
                            break;
                    }
                    break;
                case 'March'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[2][0];
                            x = x + expense.amount;
                            amount1[2][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[2][1];
                            x = x + expense.amount;
                            amount1[2][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[2][2];
                            x = x + expense.amount;
                            amount1[2][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[2][3];
                            x = x + expense.amount;
                            amount1[2][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[2][4];
                            x = x + expense.amount;
                            amount1[2][4] = x;
                            break;
                        case 'Home':
                            x = amount1[2][5];
                            x = x + expense.amount;
                            amount1[2][5] = x;
                            break;
                    }
                    break;
                case 'April'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[3][0];
                            x = x + expense.amount;
                            amount1[3][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[3][1];
                            x = x + expense.amount;
                            amount1[3][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[3][2];
                            x = x + expense.amount;
                            amount1[3][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[3][3];
                            x = x + expense.amount;
                            amount1[3][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[3][4];
                            x = x + expense.amount;
                            amount1[3][4] = x;
                            break;
                        case 'Home':
                            x = amount1[3][5];
                            x = x + expense.amount;
                            amount1[3][5] = x;
                            break;
                    }
                    break;
                case 'May'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[4][0];
                            x = x + expense.amount;
                            amount1[4][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[4][1];
                            x = x + expense.amount;
                            amount1[4][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[4][2];
                            x = x + expense.amount;
                            amount1[4][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[4][3];
                            x = x + expense.amount;
                            amount1[4][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[4][4];
                            x = x + expense.amount;
                            amount1[4][4] = x;
                            break;
                        case 'Home':
                            x = amount1[4][5];
                            x = x + expense.amount;
                            amount1[4][5] = x;
                            break;
                    }
                    break;
                case 'June'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[5][0];
                            x = x + expense.amount;
                            amount1[5][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[5][1];
                            x = x + expense.amount;
                            amount1[5][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[5][2];
                            x = x + expense.amount;
                            amount1[5][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[5][3];
                            x = x + expense.amount;
                            amount1[5][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[5][4];
                            x = x + expense.amount;
                            amount1[5][4] = x;
                            break;
                        case 'Home':
                            x = amount1[5][5];
                            x = x + expense.amount;
                            amount1[5][5] = x;
                            break;
                    }
                    break;
                case 'July'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[6][0];
                            x = x + expense.amount;
                            amount1[6][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[6][1];
                            x = x + expense.amount;
                            amount1[6][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[6][2];
                            x = x + expense.amount;
                            amount1[6][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[6][3];
                            x = x + expense.amount;
                            amount1[6][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[6][4];
                            x = x + expense.amount;
                            amount1[6][4] = x;
                            break;
                        case 'Home':
                            x = amount1[6][5];
                            x = x + expense.amount;
                            amount1[6][5] = x;
                            break;
                    }
                    break;
                case 'August'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[7][0];
                            x = x + expense.amount;
                            amount1[7][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[7][1];
                            x = x + expense.amount;
                            amount1[7][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[7][2];
                            x = x + expense.amount;
                            amount1[7][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[7][3];
                            x = x + expense.amount;
                            amount1[7][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[7][4];
                            x = x + expense.amount;
                            amount1[7][4] = x;
                            break;
                        case 'Home':
                            x = amount1[7][5];
                            x = x + expense.amount;
                            amount1[7][5] = x;
                            break;
                    }
                    break;
                case 'September'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[8][0];
                            x = x + expense.amount;
                            amount1[8][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[8][1];
                            x = x + expense.amount;
                            amount1[8][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[8][2];
                            x = x + expense.amount;
                            amount1[8][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[8][3];
                            x = x + expense.amount;
                            amount1[8][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[8][4];
                            x = x + expense.amount;
                            amount1[8][4] = x;
                            break;
                        case 'Home':
                            x = amount1[8][5];
                            x = x + expense.amount;
                            amount1[8][5] = x;
                            break;
                    }
                    break;
                case 'October'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[9][0];
                            x = x + expense.amount;
                            amount1[9][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[9][1];
                            x = x + expense.amount;
                            amount1[9][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[9][2];
                            x = x + expense.amount;
                            amount1[9][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[9][3];
                            x = x + expense.amount;
                            amount1[9][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[9][4];
                            x = x + expense.amount;
                            amount1[9][4] = x;
                            break;
                        case 'Home':
                            x = amount1[9][5];
                            x = x + expense.amount;
                            amount1[9][5] = x;
                            break;
                    }
                    break;
                case 'November'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[10][0];
                            x = x + expense.amount;
                            amount1[10][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[10][1];
                            x = x + expense.amount;
                            amount1[10][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[10][2];
                            x = x + expense.amount;
                            amount1[10][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[10][3];
                            x = x + expense.amount;
                            amount1[10][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[10][4];
                            x = x + expense.amount;
                            amount1[10][4] = x;
                            break;
                        case 'Home':
                            x = amount1[10][5];
                            x = x + expense.amount;
                            amount1[10][5] = x;
                            break;
                    }
                    break;
                case 'December'://Switch case for matching the month
                    switch (expense.category) {//Switch case for matching the month
                        case 'Miscellaneous':
                            x = amount1[11][0];
                            x = x + expense.amount;
                            amount1[11][0] = x;
                            break;
                        case 'Entertainment':
                            x = amount1[11][1];
                            x = x + expense.amount;
                            amount1[11][1] = x;
                            break;
                        case 'Food and Drink':
                            x = amount1[11][2];
                            x = x + expense.amount;
                            amount1[11][2] = x;
                            break;
                        case 'Transportation':
                            x = amount1[11][3];
                            x = x + expense.amount;
                            amount1[11][3] = x;
                            break;
                        case 'Utilities':
                            x = amount1[11][4];
                            x = x + expense.amount;
                            amount1[11][4] = x;
                            break;
                        case 'Home':
                            x = amount1[11][5];
                            x = x + expense.amount;
                            amount1[11][5] = x;
                            break;
                    }
                    break;
            }
        })
        return amount1; //Returning data in required format for input data for graph
    }

    const chart = useRef(null);

    useLayoutEffect(() => { //Using useRef for dispalying graphs
        yearHeadingHandler();

        const amountData = getAmountMonthWise();
        let x = am4core.create("chartdiv", am4charts.XYChart); //Creating a instance of graph

        x.paddingRight = 20;

        x.data = [{ // Assigning data to input data of graph 
            "month": "January",
            "Miscellaneous": `${amountData[0][0]}`,
            "Entertainment": `${amountData[0][1]}`,
            "Food and Drink": `${amountData[0][2]}`,
            "Transportation": `${amountData[0][3]}`,
            "Utilities": `${amountData[0][4]}`,
            "Home": `${amountData[0][5]}`
        }, {
            "month": "February",
            "Miscellaneous": `${amountData[1][0]}`,
            "Entertainment": `${amountData[1][1]}`,
            "Food and Drink": `${amountData[1][2]}`,
            "Transportation": `${amountData[1][3]}`,
            "Utilities": `${amountData[1][4]}`,
            "Home": `${amountData[1][5]}`
        }, {
            "month": "March",
            "Miscellaneous": `${amountData[2][0]}`,
            "Entertainment": `${amountData[2][1]}`,
            "Food and Drink": `${amountData[2][2]}`,
            "Transportation": `${amountData[2][3]}`,
            "Utilities": `${amountData[2][4]}`,
            "Home": `${amountData[2][5]}`
        }, {
            "month": "April",
            "Miscellaneous": `${amountData[3][0]}`,
            "Entertainment": `${amountData[3][1]}`,
            "Food and Drink": `${amountData[3][2]}`,
            "Transportation": `${amountData[3][3]}`,
            "Utilities": `${amountData[3][4]}`,
            "Home": `${amountData[3][5]}`
        }, {
            "month": "May",
            "Miscellaneous": `${amountData[4][0]}`,
            "Entertainment": `${amountData[4][1]}`,
            "Food and Drink": `${amountData[4][2]}`,
            "Transportation": `${amountData[4][3]}`,
            "Utilities": `${amountData[4][4]}`,
            "Home": `${amountData[4][5]}`
        }, {
            "month": "June",
            "Miscellaneous": `${amountData[5][0]}`,
            "Entertainment": `${amountData[5][1]}`,
            "Food and Drink": `${amountData[5][2]}`,
            "Transportation": `${amountData[5][3]}`,
            "Utilities": `${amountData[5][4]}`,
            "Home": `${amountData[5][5]}`
        }, {
            "month": "July",
            "Miscellaneous": `${amountData[6][0]}`,
            "Entertainment": `${amountData[6][1]}`,
            "Food and Drink": `${amountData[6][2]}`,
            "Transportation": `${amountData[6][3]}`,
            "Utilities": `${amountData[6][4]}`,
            "Home": `${amountData[6][5]}`
        }, {
            "month": "August",
            "Miscellaneous": `${amountData[7][0]}`,
            "Entertainment": `${amountData[7][1]}`,
            "Food and Drink": `${amountData[7][2]}`,
            "Transportation": `${amountData[7][3]}`,
            "Utilities": `${amountData[7][4]}`,
            "Home": `${amountData[7][5]}`
        }, {
            "month": "September",
            "Miscellaneous": `${amountData[8][0]}`,
            "Entertainment": `${amountData[8][1]}`,
            "Food and Drink": `${amountData[8][2]}`,
            "Transportation": `${amountData[8][3]}`,
            "Utilities": `${amountData[8][4]}`,
            "Home": `${amountData[8][5]}`
        }, {
            "month": "October",
            "Miscellaneous": `${amountData[9][0]}`,
            "Entertainment": `${amountData[9][1]}`,
            "Food and Drink": `${amountData[9][2]}`,
            "Transportation": `${amountData[9][3]}`,
            "Utilities": `${amountData[9][4]}`,
            "Home": `${amountData[9][5]}`
        }, {
            "month": "November",
            "Miscellaneous": `${amountData[10][0]}`,
            "Entertainment": `${amountData[10][1]}`,
            "Food and Drink": `${amountData[10][2]}`,
            "Transportation": `${amountData[10][3]}`,
            "Utilities": `${amountData[10][4]}`,
            "Home": `${amountData[10][5]}`
        }, {
            "month": "December",
            "Miscellaneous": `${amountData[11][0]}`,
            "Entertainment": `${amountData[11][1]}`,
            "Food and Drink": `${amountData[11][2]}`,
            "Transportation": `${amountData[11][3]}`,
            "Utilities": `${amountData[11][4]}`,
            "Home": `${amountData[11][5]}`
        },
        ];
        // Defining X-Axis with month
        var categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "month"; // tells category to search for this attribute in  data array.
        categoryAxis.title.text = "Month";
        categoryAxis.title.fontWeight = "bold";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 20;
        // Defining Y-Axis with amount
        var valueAxis = x.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Amount($)";
        valueAxis.title.fontWeight = "bold";
        // Defining graph type as series which will be displyed on graph
        var series = x.series.push(new am4charts.ColumnSeries());
        // Binding series to data
        series.dataFields.valueY = "Miscellaneous";
        series.dataFields.categoryX = "month";
        // Configuring Series - to configure series appearance and related properties.
        // For example, we can set series' name, so that it can be nicely represented in Legend and tooltips.
        series.columns.template.tooltipText = "Miscellaneous ${valueY}";
        series.stacked = true;
        series.name = "Miscellaneous";
        // series.columns.template.fill = am4core.color("#104547");
        // Creating stacks.
        var series2 = x.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "Entertainment";
        series2.dataFields.categoryX = "month";
        series2.columns.template.tooltipText = "Entertainment ${valueY}";
        series2.stacked = true;
        series2.name = "Entertainment";

        var series3 = x.series.push(new am4charts.ColumnSeries());
        series3.dataFields.valueY = "Food and Drink";
        series3.dataFields.categoryX = "month";
        series3.columns.template.tooltipText = "Food and Drink ${valueY}";
        series3.stacked = true;
        series3.name = "Food and Drink";

        var series4 = x.series.push(new am4charts.ColumnSeries());
        series4.dataFields.valueY = "Transportation";
        series4.dataFields.categoryX = "month";
        series4.columns.template.tooltipText = "Transportation ${valueY}";
        series4.name = "Transportation";
        series4.stacked = true;

        var series5 = x.series.push(new am4charts.ColumnSeries());
        series5.dataFields.valueY = "Utilities";
        series5.dataFields.categoryX = "month";
        series5.columns.template.tooltipText = "Utilities ${valueY}";
        series5.stacked = true;
        series5.name = "Utilities";

        var series6 = x.series.push(new am4charts.ColumnSeries());
        series6.dataFields.valueY = "Home";
        series6.dataFields.categoryX = "month";
        series6.columns.template.tooltipText = "Home ${valueY}";
        series6.stacked = true;
        series6.name = "Home";

        x.legend = new am4charts.Legend();
        x.legend.position = "top";


        x.cursor = new am4charts.XYCursor();
        x.scrollbarX = new am4core.Scrollbar()
        chart.current = x;

        return () => {
            x.dispose();
        };
    }, [getAmountMonthWise, props]);

    return (
        <div className="barchart">
            {yearHeadingDispllay ? <p>Select year to display graph.</p> : <p>{props.sortYear} Expenses</p>}
            <div id="chartdiv" className="chartdiv"></div>
        </div>
    );
};

export default BarChart;