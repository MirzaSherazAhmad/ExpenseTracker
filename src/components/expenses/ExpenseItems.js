import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "../expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  // const [title, newTitle] = useState(props.title);

  // const clickHandler = () => {
  //   newTitle("updated");
  //   console.log(title);
  // };
  return (
    
  <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  </li>
  );
};
export default ExpenseItems;
