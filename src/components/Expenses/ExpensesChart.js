import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "01", value: 0 },
    { label: "02", value: 0 },
    { label: "03", value: 0 },
    { label: "04", value: 0 },
    { label: "05", value: 0 },
    { label: "06", value: 0 },
    { label: "07", value: 0 },
    { label: "08", value: 0 },
    { label: "09", value: 0 },
    { label: "10", value: 0 },
    { label: "11", value: 0 },
    { label: "12", value: 0 },
    { label: "13", value: 0 },
    { label: "14", value: 0 },
    { label: "15", value: 0 },
    { label: "16", value: 0 },
    { label: "17", value: 0 },
    { label: "18", value: 0 },
    { label: "19", value: 0 },
    { label: "20", value: 0 },
    { label: "21", value: 0 },
    { label: "22", value: 0 },
    { label: "23", value: 0 },
    { label: "24", value: 0 },
    { label: "25", value: 0 },
    { label: "26", value: 0 },
    { label: "27", value: 0 },
    { label: "28", value: 0 },
    { label: "29", value: 0 },
    { label: "30", value: 0 },
    { label: "31", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseDay = expense.date.getDate(); // Starting at 0 =>
    chartDataPoints[expenseDay - 1].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
