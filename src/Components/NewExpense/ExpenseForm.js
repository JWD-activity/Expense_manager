import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTilte, setEnteredTilte] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTilte(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTilte,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              value={enteredTilte}
              type='text'
              onChange={titleChangeHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              value={enteredAmount}
              onChange={amountChangeHandler}
              min='0.01'
              step='0.01'
            />
          </div>

          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              onChange={dateChangeHandler}
              vlaue={enteredDate}
              min='01-01-2018'
              max='31-12-2023'
            />
          </div>

          <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
