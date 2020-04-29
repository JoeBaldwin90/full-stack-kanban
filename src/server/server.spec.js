import { addNewTask, updateTask } from "./server";

// Check we can add a task to the server.
(async function myFunc() {
  await addNewTask({
    name: "My Task",
    id: "12345",
  });
  await updateTask({
    id: "12345",
    name: "My task - UPDATED!",
  });
})();
