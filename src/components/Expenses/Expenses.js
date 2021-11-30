import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpanses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const printExpenses = filteredExpanses.map((expense) => (
    <ExpenseItem key={expense.id} expense={expense} />
  ));

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpanses.length === 0 && <p>No expenses found</p>}
      {filteredExpanses.length > 0 && printExpenses}
    </Card>
  );
};

export default Expenses;
