import React, { Fragment } from "react";
import styled from "styled-components";
import colours from "../styles/colours";

import { Button, TextArea, CardTitle, Comment } from "../styles/shared.js";

export const TaskCard = styled.div`
  border: solid 3px ${colours.navy};
  border-radius: 1em;
  grid-column: 4 / span 6;
  padding: 1em 1em 0 1em;
`;

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
             <div>
               <CardTitle onChange={setTaskName} value={task.name} />
             </div>

             <div>
               Status:{" "}
               <select onChange={setTaskGroup} className='form-control'>
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
               {isComplete ? "Reopen" : "Complete"}
             </Button>
           </TaskCard>
         </Fragment>
       );
