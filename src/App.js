import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
const Dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 8, 8),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 974.12,
    date: new Date(2020, 2, 18),
  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.12,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 954.12,
    date: new Date(2021, 5, 8),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy);

  const addExpenseHandler = (expense) => {
    setExpenses((pervExpense) => {
      return [expense, ...pervExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
