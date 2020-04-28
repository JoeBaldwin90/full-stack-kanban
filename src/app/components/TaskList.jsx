import React, { Fragment } from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <Fragment>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
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
      console.log("Create new task: ", id);      
    }
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
