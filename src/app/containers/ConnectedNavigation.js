import { connect } from "react-redux";
import { Navigation } from '../components/Navigation';

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);