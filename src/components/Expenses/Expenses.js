import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  const printExpanses = items.map((expense) => {
    return <ExpenseItem key={expense.id} expense={expense} />;
  });

  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">{printExpanses}</Card>
    </div>
  );
};

export default Expenses;
