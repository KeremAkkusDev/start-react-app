import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((filtered) => {
    if (filteredYear === "All") {
      return items;
    } else {
      return filtered.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length ? (
          filteredExpenses.map((item, index) => (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        ) : (
          <p style={{color:"#fff"}}>No expenses found.</p>
        )}
      </Card>
    </>
  );
}

export default Expenses;
