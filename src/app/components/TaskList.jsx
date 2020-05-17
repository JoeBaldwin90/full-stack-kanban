import React from "react";
import {
  Button,
  StyledLink,
  GroupCard,
  Title,
} from "../styles/shared.js";
import { TickIcon } from "./shared/TickIcon";
import { CrossIcon } from "./shared/CrossIcon";

const taskStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.75em",
};

const buttonContainer = { minWidth: "40px", textAlign: "right" };

export const TaskList = ({
  tasks,
  name,
  id,
  loggedInUserId,
  createNewTask,
  deleteTask,
}) => (
  <GroupCard>
    <Title>{name}</Title>
    {tasks.map((task, i) => (
      <div key={i} style={taskStyles}>
        <StyledLink to={`/task/${task.id}`}>{task.name}</StyledLink>
        <div style={buttonContainer}>
          <span onClick={() => deleteTask(task.id)}>
            <CrossIcon />
          </span>
          {task.isComplete && <TickIcon />}
        </div>
      </div>
    ))}
    <Button wide onClick={() => createNewTask(id, loggedInUserId)}>
      Create Task
    </Button>
  </GroupCard>
);
