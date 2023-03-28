import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  useEffect(() => {
    const expData = JSON.parse(localStorage.getItem("expensesData"));
    if (expData) {
      expData.map((data) =>
        setExpenses((prev) => [
          ...prev,
          { title: data.title, amount: data.amount, date: new Date(data.date), id: data.id },
        ])
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expensesData", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div className="container">
      <NewExpense items={expenses} onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} setItems={setExpenses} />
    </div>
  );
}

export default App;
