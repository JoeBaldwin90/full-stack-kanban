import React from "react";
import {
  Button,
  StyledLink,
  Card,
  Title,
  StyledTick,
} from "../styles/shared.js";
import { TickIcon } from "./shared/TickIcon";

export const TaskList = ({
  tasks,
  name,
  id,
  loggedInUserId,
  createNewTask,
}) => (
  <Card>
    <Title>{name}</Title>
    {tasks.map((task) => (
      <p>
        <StyledLink key={task.id} to={`/task/${task.id}`}>
          {task.name}
        </StyledLink>
        {task.isComplete && (
          <StyledTick>
            <TickIcon />
          </StyledTick>
        )}
      </p>
    ))}
    <Button wide onClick={() => createNewTask(id, loggedInUserId)}>
      Create New Task
    </Button>
  </Card>
);
