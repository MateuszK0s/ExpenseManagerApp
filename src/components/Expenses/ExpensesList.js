import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return items.map((expense) => (
    <ExpenseItem key={expense.id} expense={expense} />
  ));
};

export default ExpensesList;
