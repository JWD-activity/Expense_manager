import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }
  return (
    <ul>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amoung}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
