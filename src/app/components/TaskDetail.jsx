import React, { Fragment } from "react";
import { TickIcon } from "./shared/TickIcon";
import colours from '../styles/colours.js';
import {
  Button,
  TextArea,
  CardTitle,
  Comment,
  TaskCard,
} from "../styles/shared.js";

const cardTitleContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const tickStyles = {
  width: "2.25em",
};

const optionStyles = {
  fontSize: "1.2em",
  color: `${colours.navy}`,
  border: `solid 1px ${colours.navy}`,
  background: "none",
};

export const TaskDetail = ({
  id,
  task,
  isComplete,
  groups,
  comments,
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
  createNewComment,
}) => (
  <Fragment>
    <TaskCard>
      <div style={cardTitleContainer}>
        <CardTitle onChange={setTaskName} value={task.name} />
        {task.isComplete ? (
          <div style={tickStyles}>
            <TickIcon />
          </div>
        ) : (
          <span></span>
        )}
      </div>

      <div>
        <select onChange={setTaskGroup} value={task.group} style={optionStyles}>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {comments.map((comment, key) => {
          if (comment.task == task.id) {
            return <Comment key={key}>{comment.content}</Comment>;
          }
        })}
      </div>

      <form onSubmit={createNewComment} id='new-comment'>
        <TextArea
          name='comment'
          form='new-comment'
          id='new-comment-text'
          placeholder='Add a comment...'
        />
        <Button wide type='submit'>
          Add Comment
        </Button>
      </form>

      <Button wide onClick={() => setTaskCompletion(id, !isComplete)}>
        {isComplete ? "Mark Rejected" : "Mark Approved"}
      </Button>
    </TaskCard>
  </Fragment>
);
