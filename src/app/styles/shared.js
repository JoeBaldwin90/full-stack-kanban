import styled from "styled-components";
import colours from "./colours";
import { Link } from "react-router-dom";

export const MainLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5em 1em;
  grid-auto-flow: row;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2em;
  @media (max-width: 425px) {
    padding: 0 1em;
  }
`;

export const StyledNav = styled.nav`
  grid-column: span 12;
  padding: 1em;
  border-bottom: 2px solid ${colours.pink};
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
`;

export const KanbanBoard = styled.section`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
`;

export const GroupCard = styled.div`
  width: calc(33% - 1em);
  border: solid 3px ${colours.navy};
  border-radius: 1em;
  padding: 0 1em 1em 1em;
  display: table;
  @media (max-width: 800px) {
    margin-right: 1em;
  }
  @media (max-width: 425px) {
    width: calc(45% - 1em);
  }
`;

export const LoginContainer = styled.div`
  min-width: 350px;
  grid-column: span 12;
  border: solid 3px ${colours.navy};
  padding: 1em;
  margin: 0 auto;
  border-radius: 1em;
  @media (max-width: 425px) {
    min-width: 200px;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${colours.blue};
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
    font-style: italic;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.wide && "100%"};
  min-width: 200px;
  padding: 0.5em 2em;
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  background: ${colours.seafoam};
  &:hover {
    background: ${colours.seafoamLight};
  }
  &:last-child {
    margin-top: 0.75em;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0.5em 0 0.75em 0;
`;

export const WarningMessage = styled.p`
  font-weight: bold;
  color: ${colours.pink};
  margin-top: 0.5em;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.5em;
  display: block;
  padding: 0.5em;
  margin: 0.5em 0;
  &:hover {
    background: ${colours.lightGrey};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 0.5em;
  display: block;
  padding: 0.5em;
  margin: 0.5em 0;
`;

export const TaskCard = styled.div`
  border: solid 3px ${colours.navy};
  border-radius: 1em;
  grid-column: 4 / span 6;
  padding: 1em;
  @media (max-width: 900px) {
    grid-column: 3 / span 8;
  }
  @media (max-width: 768px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 520px) {
    grid-column: span 12;
  }
`;

export const CardTitle = styled.input`
  width: 100%;
  color: ${colours.navy};
  padding: 0.25em 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  border-radius: 0.5em;
  margin-bottom: 1em;
  &:hover {
    background: ${colours.lightGrey};
  }
`;

export const Pop = styled.span`
  color: ${colours.blue};
  border-bottom: 2px solid ${colours.blue};
  padding: 0.25em;
  cursor: pointer;
  &:hover {
    background: ${colours.yellowLight};
    border-bottom: 2px solid ${colours.navy};
  }
`;

export const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  margin-top: 0.5em;
  background: ${colours.lightGrey};
  border-radius: 0.5em;
`;
