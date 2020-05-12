import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { TaskDetail } from '../components/TaskDetail';

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;
  let comments = state.comments;

  return {
    id,
    task,
    isComplete: task.isComplete,
    groups,
    comments,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    },
    createNewComment(e) {
      e.preventDefault();
      let commentBody = e.target['new-comment-text'].value;
      dispatch(mutations.requestCommentCreation(id, commentBody));
      e.target['new-comment-text'].value = "";
    },
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
