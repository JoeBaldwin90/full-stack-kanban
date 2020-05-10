import React from "react";
import { Button, StyledLink, Card, Title } from "../styles/shared.js";

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
      <StyledLink key={task.id} to={`/task/${task.id}`}>
        <p>{task.name}</p>
      </StyledLink>
    ))}
    <Button wide onClick={() => createNewTask(id, loggedInUserId)}>
      Create New Task
    </Button>
  </Card>
);
