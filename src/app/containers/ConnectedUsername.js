import { connect } from "react-redux";
import { Username } from "../components/Username";

const mapStateToProps = ({ session }) => {
  if (session.username !== undefined) {
    return {
      username: session.username,
    }
  } 
};

export const ConnectedUsername = connect(mapStateToProps)(Username);
