import React, { Fragment } from "react";
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

