import express from "express";
import cors from "cors";
import path from 'path';
import bodyParser from "body-parser";
import { connectDB } from "./connect-db.js";
import "./initialize-db.js";
import { authenticationRoute } from "./authenticate.js";

let port = process.env.PORT || 7777;
let app = express();

app.listen(port, console.log(`Server listening on ${port}`));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
  app.use(express.static("dist"));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
  });
}

export const addNewTask = async (task) => {
  let db = await connectDB();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  let { id, group, isComplete, name } = task;
  let db = await connectDB();
  let collection = db.collection("tasks");

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.post("/task/new", async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});

app.post("/task/update", async (req, res) => {
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});

export const addNewComment = async (comment) => {
  let db = await connectDB();
  let collection = db.collection("comments");
  await collection.insertOne(comment);
};

app.post("/comment/new", async (req, res) => {
  let comment = req.body.comment;
  await addNewComment(comment);
  res.status(200).send();
});

app.post("/user/new", async (req, res) => {
  console.log(req.body);
  let newUser = req.body.user;
  let db = await connectDB();
  let collection = db.collection("users");
  let userExists = await collection.findOne({ name: newUser.name });
  if (userExists) {
    return res
      .status(500)
      .send("Can't create account. Username already exists");
  }
  await collection.insertOne(newUser);
  res.status(200).send(`Thanks ${newUser.name}, your account is created!`);
});

export const deleteTask = async (task) => {
  let db = await connectDB();
  let tasks = db.collection("tasks");
  await tasks.deleteOne(task);
};

app.delete("/task/:id", async (req, res) => {
  let task = req.params;
  await deleteTask(task);
  res.status(200).send();
});

export const deleteComment = async (comment) => {
  let db = await connectDB();
  let tasks = db.collection("comments");
  await tasks.deleteOne(comment);
};

app.delete("/comment/:id", async (req, res) => {
  let comment = req.params;
  await deleteComment(comment);
  res.status(200).send();
});
