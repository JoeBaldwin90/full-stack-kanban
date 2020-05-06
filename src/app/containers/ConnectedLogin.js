import { connect } from "react-redux";
import * as mutations from '../store/mutations';
import { Login } from '../components/Login';

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
  noAccount: session.noAccount
});

const mapDispatchToProps = dispatch => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
  requestSignUp() {
    dispatch(mutations.requestSignUp(true));
  },
  createUser(e) {
    e.preventDefault();
    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.createUser(username, password));
  }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
