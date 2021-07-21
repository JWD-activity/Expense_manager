import React, { useState } from 'react';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';

function Expense() {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
    </div>
  );
}

export default Expense;
