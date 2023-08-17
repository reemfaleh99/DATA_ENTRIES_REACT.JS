import { useState } from "react";

import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };

    props.onSaveExpenseData(expenseDate);
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Ttile</label>
          <input
            type="text"
            value={titleEntered}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={amountEntered}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={dateEntered}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
