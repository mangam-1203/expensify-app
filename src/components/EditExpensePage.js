import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <div className="summary">
        <div className="content-container">
          <h1 className="summary__title">Edit the expense</h1>
        </div>
      </div>

      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push("/");
          }}
        />
        <button
          className="rembtn"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.match.params.id }));
            props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpensePage);
