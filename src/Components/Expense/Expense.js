import React, { useState } from 'react';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpense} />
    </div>
  );
}

export default Expense;
