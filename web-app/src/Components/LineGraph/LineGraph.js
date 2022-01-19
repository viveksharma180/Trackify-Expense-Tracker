import React, { useLayoutEffect, useRef } from 'react';
import './LineGraph.scss';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts"; // import amcharts
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function LineGraph(props) {
    //Creating function to generate data from props into desire format for producing graphs
    const genData = () => {
        var data = [];
        props.allExpenses.forEach((expense) => {
            let obj = {
                date: new Date(expense.transactionDate),
                amount: expense.amount
            }
            // console.log(obj);
            data.push(obj);
        })
        return data;
        // return data;
    }

    const chart = useRef(null);

    useLayoutEffect(() => { // Using LayoutEffect to display graph
        const display = genData();
        console.log(display);

        let x = am4core.create("lineGraphdiv", am4charts.XYChart);

        x.data = display;

        var dateAxis = x.xAxes.push(new am4charts.DateAxis());
        var valueAxis = x.yAxes.push(new am4charts.ValueAxis());

        var series = x.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "amount";
        series.dataFields.dateX = "date";
        series.tooltipText = "${valueY}";
        x.cursor = new am4charts.XYCursor();

        chart.current = x;

        return () => {
            x.dispose();
        };
    }, [genData, props]);


    return (
        <div>
            <div id="lineGraphdiv" className="lineGraphdiv"></div>
        </div>
    )
};

export default LineGraph;