import { connectDB } from "./connect-db.mjs";

export const getHomepage = (req, res) => {
  res.sendFile(path.resolve("index.html"));
};

export const newTask = async (req, res) => {
  let task = req.body.task;
  let db = await connectDB();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
  res.status(200).send();
}

export const updateTask = async (req, res) => {
  let task = req.body.task;
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
  res.status(200).send();
};

export const deleteTask = async (req, res) => {
  let task = req.params;
  let db = await connectDB();
  let tasks = db.collection("tasks");
  await tasks.deleteOne(task);
  res.status(200).send();
};

export const newComment = async (req, res) => {
  let comment = req.body.comment;
  let db = await connectDB();
  let collection = db.collection("comments");
  await collection.insertOne(comment);
  res.status(200).send();
};

export const deleteComment = async (req, res) => {
  let comment = req.params;
  let db = await connectDB();
  let tasks = db.collection("comments");
  await tasks.deleteOne(comment);
  res.status(200).send();
};

export const newUser = async (req, res) => {
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
}
