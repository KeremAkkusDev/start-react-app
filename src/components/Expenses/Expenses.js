import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ items, setItems }) {
  const [filteredMonth, setFilteredMonth] = useState("All");
  const [totalExpense, setTotalExpense] = useState(0);

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  useEffect(() => {
    setTotalExpense(0);
    filteredExpenses.map((filteredEx) =>
      setTotalExpense((prev) => prev + filteredEx.amount)
    );
  });

  const filteredExpenses = items.filter((filtered) => {
    if (filteredMonth === "All") {
      return items;
    } else {
      return filtered.date.getMonth().toString() === filteredMonth;
    }
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredMonth}
          onChangeFilter={filterChangeHandler}
          totalExpense={totalExpense}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} setItems={setItems} />
      </Card>
    </>
  );
}

export default Expenses;
