import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const TaskDetail = ({ id, task, isComplete, groups }) => (
  <Fragment>
    <div>
      <input value={task.name} />
    </div>
    <div>
      <button>Toggle Completed/Incomplete</button>
    </div>

    <div>
      <select>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>

    <div>
      <Link to='/dashboard'>
        <button>Done</button>
      </Link>
    </div>
  </Fragment>
);

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    isComplete: task.isComplete,
    groups,
  };
}

export const ConnectedTaskDetail = connect(
  mapStateToProps
)(TaskDetail);
