import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetail = ({
  id,
  task,
  isComplete,
  groups,
  comments,
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
  createNewComment
}) => (
    <Fragment>
      <div>
        <input onChange={setTaskName} value={task.name} />
      </div>
      <div>
        <button onClick={() => setTaskCompletion(id, !isComplete)}>
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>

      <div>
        <select onChange={setTaskGroup} className="form-control">
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {comments.map(comment => {
          if (comment.task == task.id) {
            return (
              <p>{comment.content}</p>
            )
          }
        })}
      </div>

      <button onClick={() => createNewComment(id)}>Create new comment</button>

      <div>
        <Link to='/dashboard'>
          <button>Done</button>
        </Link>
      </div>
    </Fragment>
  );

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
    comments
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
    createNewComment(id) {
      dispatch(mutations.requestCommentCreation(id));
    },
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
