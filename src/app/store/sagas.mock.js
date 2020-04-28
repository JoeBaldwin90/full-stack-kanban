import { take, put, select } from "redux-saga/effects";

import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION); // Which group button was clicked
    const ownerID = "U1";
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID)); // Random ID, Group-specific ID, Default Owner ID
    console.log("SAGA: Got group ID: ", groupID);
  }
}
