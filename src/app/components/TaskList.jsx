import React from "react";
import {
  Button,
  StyledLink,
  GroupCard,
  Title,
  StyledTick,
} from "../styles/shared.js";
import { TickIcon } from "./shared/TickIcon";
import { CrossIcon } from "./shared/CrossIcon";

const taskStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.75em",
};

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
        <div>
          <span onClick={() => deleteTask(task.id)}>
            <CrossIcon />
          </span>
          {task.isComplete && (
            <StyledTick>
              <TickIcon />
            </StyledTick>
          )}
        </div>
      </div>
    ))}
    <Button wide onClick={() => createNewTask(id, loggedInUserId)}>
      Create New Task
    </Button>
  </GroupCard>
);
