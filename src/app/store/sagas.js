import { take, put, select } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";

const url = "http://localhost:7777";    // Server port

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION); // Which group button was clicked
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
        name: "New Task (Live)",
      },
    });
    console.log("Got response: ", res);
  }
}
