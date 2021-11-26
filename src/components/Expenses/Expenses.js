import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  const printExpanses = items.map((expense) => {
    return <ExpenseItem key={expense.id} expense={expense} />;
  });

  return <Card className="expenses">{printExpanses}</Card>;
};

export default Expenses;
