import React, { Fragment } from "react";
import styled from "styled-components";

import { ConnectedTaskList } from "../containers/ConnectedTaskList";

const GroupCardBoard = styled.section`
  grid-column: 2 / span 10;
  display: flex;
  justify-content: space-between;
`;

export const Dashboard = ({ groups }) => (
  <Fragment>
    <GroupCardBoard>
      {groups.map((group) => (
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
      ))}
    </GroupCardBoard>
  </Fragment>
);
