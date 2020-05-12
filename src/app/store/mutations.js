export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const REQUEST_COMMENT_CREATION = `REQUEST_COMMENT_CREATION`;
export const CREATE_COMMENT = `CREATE_COMMENT`;
export const CREATE_USER = `CREATE_USER`;
export const REQUEST_SIGNUP = `REQUEST_SIGNUP`;
export const REQUEST_TASK_DELETE = `REQUEST_TASK_DELETE`;

export const requestTaskCreation = (groupID, userID) => ({
  type: REQUEST_TASK_CREATION,
  groupID,
  userID,
});

export const createTask = (taskID, groupID, ownerID) => ({
  type: CREATE_TASK,
  taskID,
  groupID,
  ownerID,
});

export const setTaskCompletion = (id, isComplete) => ({
  type: SET_TASK_COMPLETE,
  taskID: id,
  isComplete,
});

export const setTaskName = (id, name) => ({
  type: SET_TASK_NAME,
  taskID: id,
  name,
});

export const setTaskGroup = (id, groupID) => ({
  type: SET_TASK_GROUP,
  taskID: id,
  groupID,
});

export const requestAuthenticateUser = (username, password) => ({
  type: REQUEST_AUTHENTICATE_USER,
  username,
  password,
});

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => ({
  type: PROCESSING_AUTHENTICATE_USER,
  session,
  authenticated: status,
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state,
});

export const requestCommentCreation = (taskID, commentBody) => ({
  type: REQUEST_COMMENT_CREATION,
  taskID,
  commentBody,
});

export const createComment = (commentID, ownerID, taskID, commentBody) => ({
  type: CREATE_COMMENT,
  commentID,
  ownerID,
  taskID,
  commentBody,
});

export const createUser = (username, password) => ({
  type: CREATE_USER,
  username,
  password,
});

export const requestSignUp = (noAccount) => ({
  type: REQUEST_SIGNUP,
  noAccount,
});

export const requestTaskDeletion = (taskID) => ({
  type: REQUEST_TASK_DELETE,
  taskID,
});