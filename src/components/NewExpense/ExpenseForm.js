import React, { useState } from "react";
function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData(newExpense);
    setNewExpense({ title: "", amount: "", date: "" });
  };

  const setTitle = (e) => {
    setNewExpense((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const setAmount = (e) => {
    setNewExpense((prevState) => {
      return { ...prevState, amount: parseFloat(e.target.value) };
    });
  };
  const setDate = (e) => {
    setNewExpense((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={setDate}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newExpense.title} onChange={setTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newExpense.amount}
            onFocus={(e) => {
              e.target.value = "";
            }}
            onChange={setAmount}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
