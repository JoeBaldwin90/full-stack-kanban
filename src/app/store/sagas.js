import { take, put, select } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { history } from "./history";

const url = process.env.NODE_ENV == "production" ? "" : "http://localhost:7777";

export function* taskCreationSaga() {
  while (true) {
    const { groupID, userID } = yield take(mutations.REQUEST_TASK_CREATION);
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, userID));

    const { res } = yield axios.post(url + "/task/new", {
      // Body of POST request
      task: {
        id: taskID,
        group: groupID,
        owner: userID,
        isComplete: false,
        name: "New Task",
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
        isComplete: task.isComplete,
      },
    });
    console.log("Updated task!");
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      }); 
      if (!data) {
        throw new Error();
      }
      console.log(username, "is authenticated! ", data);
      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
      history.push("/dashboard");
    } catch (e) {
      console.log("Can't authenticate: ", e.response.data);
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}

export function* commentCreationSaga() {
  while (true) {
    const { taskID, commentBody } = yield take(
      mutations.REQUEST_COMMENT_CREATION
    );
    const ownerID = "U1";
    const commentID = uuidv4();
    yield put(mutations.createComment(commentID, ownerID, taskID, commentBody));

    const { res } = yield axios.post(url + "/comment/new", {
      comment: {
        id: commentID,
        owner: ownerID,
        task: taskID,
        content: commentBody,
      },
    });
  }
}

export function* userCreationSaga() {
  while (true) {
    const { username, password } = yield take(mutations.CREATE_USER);
    const userID = uuidv4();
    const passwordHash = md5(password);

    try {
      const { userExists } = yield axios.post(url + "/user/new", {
        user: {
          id: userID,
          name: username,
          passwordHash: passwordHash,
        },
      });
      alert(`Thanks for creating an account ${username}! You can sign in now.`);
      history.push("/login");
    } catch (e) {
      alert(e.response.data);
    }
  }
}

export function* taskDeletionSaga() {
  while (true) {
    const { taskID } = yield take(mutations.REQUEST_TASK_DELETE);
    try {
      const { res } = yield axios.delete(url + "/task/" + taskID);
      alert(`Deleted task!`, taskID);
    } catch (e) {
      console.log("SAGA ERROR: Can't delete ", taskID,);
    }
  }
}

export function* commentDeletionSaga() {
  while (true) {
    const { commentID } = yield take(mutations.REQUEST_COMMENT_DELETE);
    try {
      const { res } = yield axios.delete(url + "/comment/" + commentID);
      console.log(commentID, res);
      alert(`Deleted comment!`, commentID);
    } catch (e) {
      console.log("SAGA ERROR: Can't delete ", commentID);
    }
  }
}
