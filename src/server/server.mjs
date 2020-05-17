import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import "./initialize-db.mjs";
import { authenticationRoute } from "./authenticate.mjs";
import {
  getHomepage,
  newTask,
  updateTask,
  deleteTask,
  newComment,
  deleteComment,
  newUser,
} from "./controller.mjs";

let port = process.env.PORT || 7777;
let app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get("/", getHomepage);

if (process.env.NODE_ENV == `production`) {
  app.use(express.static("dist"));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
  });
}

// Sign-in
authenticationRoute(app);

// Tasks
app.post("/task/new", newTask);
app.post("/task/update", updateTask);
app.delete("/task/:id", deleteTask);

// Comments
app.post("/comment/new", newComment);
app.delete("/comment/:id", deleteComment);

// Users
app.post("/user/new", newUser);

app.listen(port, console.log(`Server listening on ${port}`));
