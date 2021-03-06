import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { date, amount } = props.expense;
  const [title, setTitle] = useState(props.expense.title);

  // const handleTitleChange = () => {
  //   setTitle("xd");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={handleTitleChange}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
