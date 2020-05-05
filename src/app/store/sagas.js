import { take, put, select } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";
import { history } from './history';

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777"; 

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION); 
    const ownerID = "U1";
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID)); // Random ID, Group-specific ID, Default Owner ID

    const { res } = yield axios.post(url + "/task/new", {
      // Body of POST request
      task: {
        id: taskID,
        group: groupID,
        owner: ownerID,
        isComplete: false,
        name: "New Task (SAT)",
      },
    });
    console.log("Got response: ", res);
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE,
    ]);

    axios.post(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete
      }
    });
    console.log("Updated task!");
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(mutations.REQUEST_AUTHENTICATE_USER);
    try {
      const { data } = yield axios.post(url + "/authenticate", { username, password }); // yield because it's async
      if (!data) {
        throw new Error();
      }
      console.log(username, "is authenticated! ", data)
      yield put(mutations.setState(data.state))
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED))
      history.push("/dashboard");
      
    } catch (e) {
      console.log("Can't authenticate: ", e.response.data)
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED))
    }
  }
}

export function* commentCreationSaga() {
  while (true) {
    const { taskID } = yield take(mutations.REQUEST_COMMENT_CREATION); 
    const ownerID = "U1";
    const commentID = uuidv4();
    yield put(mutations.createComment(commentID, ownerID, taskID));

    const { res } = yield axios.post(url + "/comment/new", {
      comment: {
        id: commentID,
        owner: ownerID,
        task: taskID,
        content: "New comment created!",
      },
    });
  }
}
