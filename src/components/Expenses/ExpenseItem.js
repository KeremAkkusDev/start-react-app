import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const clickHandler = (e) => {
    props.onRemove(props.id);
  };

  /* function clickHandler () {
    console.log("Clicked") 
  } */

  /* const clickHandler = () =>{
    title==="Updated" ? setTitle(props.title) : setTitle("Updated")   
    // Whenever the State should change and you use that first element
    // console.log(title)
  } */

  // Whenever the State should change and you use that changed element
  /* useEffect(()=>{
    console.log(title)
  },[title]) */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount} TL</div>
          <button onClick={clickHandler} className="button-delete">
            X
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
