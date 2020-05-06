import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export const TaskDetail = ({
  id,
  task,
  isComplete,
  groups,
  comments,
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
  createNewComment
}) => (
    <Fragment>
      <div>
        <input onChange={setTaskName} value={task.name} />
      </div>
      <div>
        <button onClick={() => setTaskCompletion(id, !isComplete)}>
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>

      <div>
        <select onChange={setTaskGroup} className="form-control">
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {comments.map((comment, key) => {
          if (comment.task == task.id) {
            return (
              <p key={key}>{comment.content}</p>
            )
          }
        })}
      </div>

      <form onSubmit={createNewComment} id="new-comment">
        <textarea name="comment" form="new-comment" id="new-comment-text" placeholder="Enter text here..."></textarea>
        <button type="submit">Post Comment</button>
      </form>

      <div>
        <Link to='/dashboard'>
          <button>Done</button>
        </Link>
      </div>
    </Fragment>
  );
