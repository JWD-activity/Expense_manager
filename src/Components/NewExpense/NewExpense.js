import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [startEditing, setStartEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setStartEditing(false);
  };

  const startEditingHandler = () => {
    setStartEditing(true);
  };

  const stopEditingHandler = () => {
    setStartEditing(false);
  };

  return (
    <div className='new-expense'>
      {!startEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {startEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
