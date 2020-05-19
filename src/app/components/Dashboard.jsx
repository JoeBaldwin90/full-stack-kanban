import React from "react";
import { ConnectedTaskList } from "../containers/ConnectedTaskList";
import { KanbanBoard } from "../styles/shared.js";

export const Dashboard = ({ groups }) => (
  <KanbanBoard>
    {groups.map((group) => (
      <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
    ))}
  </KanbanBoard>
);
