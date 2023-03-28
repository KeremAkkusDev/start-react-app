import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense, items}) {
  const [isAddNew,setIsAddNew] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: items.length,
    };
    onAddExpense(expenseData);
    setIsAddNew(false)
  };
  
  const startEditing = () =>{
    setIsAddNew(true)
  }

  const stopEditing = () =>{
    setIsAddNew(false)
  }

  return (
    <div className="new-expense">
      {isAddNew 
      ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />
      : <button onClick={startEditing} type="button">Add New Expense</button>
      }
    </div>
  );
}

export default NewExpense;
