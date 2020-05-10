import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { SignUp } from "../components/SignUp";

const mapStateToProps = ({ session }) => ({
  noAccount: session.noAccount,
});

const mapDispatchToProps = (dispatch) => ({
  requestSignUp() {
    dispatch(mutations.requestSignUp(true));
  },
  createUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    dispatch(mutations.createUser(username, password));
  },
});

export const ConnectedSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
