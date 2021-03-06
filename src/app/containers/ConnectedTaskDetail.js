import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { TaskDetail } from "../components/TaskDetail";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;
  let group = task.group;
  let comments = state.comments;

  return {
    id,
    task,
    group,
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
      let commentBody = e.target["new-comment-text"].value;
      if (commentBody.length === 0) {
        alert("Comments can't be blank");
        return false;
      }
      dispatch(mutations.requestCommentCreation(id, commentBody));
      e.target["new-comment-text"].value = "";
    },
    deleteComment(commentID) {
      dispatch(mutations.requestCommentDeletion(commentID));
    },
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
