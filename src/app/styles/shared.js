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
`;

export const StyledNav = styled.nav`
  grid-column: span 12;
  padding: 1em;
  border-bottom: 2px solid ${colours.pink};
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
`;

export const GroupCardBoard = styled.section`
  grid-column: 2 / span 10;
  display: flex;
  justify-content: space-between;
`;

export const FormGrid = styled.div`
  grid-column: 2 / span 10;
  border: solid 2px ${colours.navy};
  padding: 1em;
  border-radius: 1em;
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
  padding: 0.5em 3em;
  margin-bottom: 1em;
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  background: ${colours.seafoam};
  &:hover {
    background: ${colours.seafoamLight};
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0.5em 0 0.75em 0;
`;

export const WarningMessage = styled.span`
  font-weight: bold;
  color: ${colours.pink};
  margin: 0.25em 0 0.75em 0;
`;

export const Form = styled.form`
  width: 50%;
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
  padding: 1em 1em 0 1em;
`;

export const Card = styled.div`
  border: solid 3px ${colours.navy};
  border-radius: 1em;
  padding: 0 1em;
  margin: 0 0.5em;
`;

export const CardTitle = styled.input`
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

export const Comment = styled.p`
  padding: 0.5em;
  background: ${colours.lightGrey};
  border-radius: 0.5em;
`;

export const StyledTick = styled.div`
  display: inline-block;
  width: 1em;
  margin-left: 0.5em;
  vertical-align: bottom;
`;
