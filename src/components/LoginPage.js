import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../styles/login.css";
const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">KnowExpense</h1>
      <p>It's time to get your expenses under control</p>
      <button className="box-layout__button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  startLogin: () => {
    dispatch(startLogin());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
