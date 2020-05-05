// Reducer
import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
import * as sagas from "./sagas";
import * as mutations from "./mutations";

export const store = createStore(
  combineReducers({
    session(userSession = defaultState.session || {}, action) {
      let { type, session, authenticated } = action;
      switch (type) {
        case mutations.SET_STATE:
          return { ...userSession, id: action.state.session.id, username: action.state.session.username }
        case mutations.REQUEST_AUTHENTICATE_USER:
          return { ...userSession, authenticated: mutations.AUTHENTICATING };
        case mutations.PROCESSING_AUTHENTICATE_USER:
          return { ...userSession, authenticated }
        default:
          return userSession;
      }
    },
    tasks(tasks = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.tasks;
        case mutations.CREATE_TASK:
          return [
            ...tasks,
            {
              id: action.taskID,
              name: "New task",
              group: action.groupID,
              owner: action.ownerID,
              isComplete: false,
            },
          ];
        case mutations.SET_TASK_COMPLETE:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? { ...task, isComplete: action.isComplete }
              : task;
          });
        case mutations.SET_TASK_NAME:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? { ...task, name: action.name }
              : task;
          });
        case mutations.SET_TASK_GROUP:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? { ...task, group: action.group }
              : task;
          });
      }
      return tasks;
    },
    comments(comments = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.comments;
        case mutations.CREATE_COMMENT:
          return [
            ...comments,
            {
              id: action.commentID,
              owner: action.ownerID,
              task: action.taskID,
              content: action.commentBody,
            },
          ];
      }
      return comments;
    },
    groups(groups = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.groups;
      }
      return groups;
    },
    users(users = []) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
