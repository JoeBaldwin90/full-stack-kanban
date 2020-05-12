import { connect } from "react-redux";
import { requestTaskCreation, requestTaskDeletion } from "../store/mutations";
import { TaskList } from "../components/TaskList";

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    visibleGroupId: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
    loggedInUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(visibleGroupId, loggedInUserId) {
      dispatch(requestTaskCreation(visibleGroupId, loggedInUserId));
    },
    deleteTask(taskID) {
      console.log("Clicked ", taskID);
      dispatch(requestTaskDeletion(taskID));
    },
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
