import './App.css';
import React, { useState } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expense from './Components/Expense/Expense';
import Card from './UI/Card';

const INIT_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => [expense, ...prevExpense]);
  };

  return (
    <main>
      <div className='container-main'>
        <h2 className='heading'>Expense Manager</h2>
        <Card>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expense items={expenses} />
        </Card>
      </div>
    </main>
  );
}

export default App;
