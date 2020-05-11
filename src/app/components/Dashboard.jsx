import React from "react";
import { ConnectedTaskList } from "../containers/ConnectedTaskList";
import { GroupCardBoard } from "../styles/shared.js";

export const Dashboard = ({ groups }) => (
    <GroupCardBoard>
      {groups.map((group) => (
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
      ))}
    </GroupCardBoard>
);
