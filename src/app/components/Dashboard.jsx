import React from "react";
import { ConnectedTaskList } from "../containers/ConnectedTaskList";

export const Dashboard = ({ groups }) => (
  <div>
    <h1>Dashboard</h1>
    {groups.map((group) => (
      <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
    ))}
  </div>
);
