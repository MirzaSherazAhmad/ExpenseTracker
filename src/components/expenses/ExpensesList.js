import React from 'react'
import ExpenseItems from './ExpenseItems';
import "./ExpensesList.css"

export default function ExpensesList(props) {

let expenseContent = <p>No expenses found</p>;
if (props.items.length ===0) {
    return <h2 className='expenses-list__fallback'> Found No Expenses</h2>
    
}
return <ul className='expenses-list'>
{ props.items.map((expense) => (
    <ExpenseItems 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
</ul>
}
