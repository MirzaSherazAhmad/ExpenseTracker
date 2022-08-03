import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
// let expenseContent = <p>No expenses found</p>;
// if(filteredExpenses.length > 0){
//   expenseContent=
//   filteredExpenses.map((expense) => (
//     <ExpenseItems
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))

// }


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
         <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      } */}

      {/* <ExpenseItems
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      />

      <ExpenseItems
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpenseItems
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      /> */}
    </Card>
  );
};
export default Expenses;
