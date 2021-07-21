import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <li className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <p>{props.title}</p>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
