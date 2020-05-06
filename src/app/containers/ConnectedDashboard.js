import { connect } from "react-redux";
import { Dashboard } from '../components/Dashboard';

const mapStateToProps = state => { 
  return {
      groups: state.groups 
  }
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);