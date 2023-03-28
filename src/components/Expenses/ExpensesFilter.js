import React from "react";

function ExpensesFilter({ onChangeFilter, selected, totalExpense }) {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <label>Total Expense {totalExpense}</label>
        <select
          value={selected}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="0">Ocak</option>
          <option value="1">Şubat</option>
          <option value="2">Mart</option>
          <option value="3">Nisan</option>
          <option value="4">Mayıs</option>
          <option value="5">Haziran</option>
          <option value="6">Temmuz</option>
          <option value="7">Ağustos</option>
          <option value="8">Eylül</option>
          <option value="9">Ekim</option>
          <option value="10">Kasım</option>
          <option value="11">Aralık</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
