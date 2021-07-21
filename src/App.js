import './App.css';

import React from 'react';
import ExpenseForm from './Components/Expense/ExpenseForm';
import Card from './UI/Card';

function App() {
  return (
    <main>
      <h2 className='heading'>Expense Manager</h2>

      <Card>
        <ExpenseForm />
      </Card>
    </main>
  );
}

export default App;
