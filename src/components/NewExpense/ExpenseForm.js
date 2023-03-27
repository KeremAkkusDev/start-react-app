import React, { useState } from "react";
function ExpenseForm({ onSaveExpenseData }) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData(newExpense)
    setNewExpense({ title: "", amount: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={(e) => {
              setNewExpense((prevState) => {
                return { ...prevState, date: new Date(e.target.value) };
              });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpense.title}
            onChange={(e) => {
              setNewExpense((prevState) => {
                return { ...prevState, title: e.target.value };
              });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) => {
              setNewExpense((prevState) => {
                return { ...prevState, amount: Number(e.target.value) };
              });
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
