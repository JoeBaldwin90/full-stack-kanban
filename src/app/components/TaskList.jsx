import React from "react";
import {
  Button,
  StyledLink,
  GroupCard,
  Title,
  StyledTick,
} from "../styles/shared.js";
import { TickIcon } from "./shared/TickIcon";

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
}) => (
  <GroupCard>
    <Title>{name}</Title>
    {tasks.map((task) => (
      <div key={task.id} style={taskStyles}>
        <StyledLink to={`/task/${task.id}`}>{task.name}</StyledLink>
        {task.isComplete && (
          <StyledTick>
            <TickIcon />
          </StyledTick>
        )}
      </div>
    ))}
    <Button wide onClick={() => createNewTask(id, loggedInUserId)}>
      Create New Task
    </Button>
  </GroupCard>
);
