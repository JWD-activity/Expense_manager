import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTilte, setEnteredTilte] = useState('');
  return (
    <div className='container'>
      <form className='form'>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' />
          </div>

          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' />
          </div>

          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' />
          </div>

          <div className='new-expense__actions'>
            <button type='button'>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
