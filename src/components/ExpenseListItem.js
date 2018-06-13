import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {amount}-{createdAt}
      {/* <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button> */}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
