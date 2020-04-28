import React, { Fragment } from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <Fragment>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <Link key={task.id} to={`/task/${task.id}`}>
          <p>{task.name}</p>
        </Link>
      ))}
    </div>
    <button onClick={() => createNewTask(id)}>Create New Task</button>
  </Fragment>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      // console.log("Button Click: Create new task: ", id);
      dispatch(requestTaskCreation(id));
    },
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
