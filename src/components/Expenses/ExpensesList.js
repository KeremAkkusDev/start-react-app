import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  const removeHandler = (removeExpense) => {
    props.setItems((current) =>
      current.filter((expenses) => expenses.id !== removeExpense)
    );
  };

  if (props.items.length > 0) {
    expensesContent = props.items.map((item, index) => (
      <ExpenseItem
        key={index}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        onRemove={removeHandler}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;
