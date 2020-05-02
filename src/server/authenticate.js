import md5 from 'md5';
import { connectDB } from './connect-db';

async function assembleUSerState(user) {
  let db = await connectDB();
  let tasks = db.collection('tasks').find({ owner: user.id }).toArray();
  let groups = db.collection('groups').find({ owner: user.id }).toArray();

  return {
    tasks,
    groups,
    session: { authenticated: 'AUTHENTICATED', id: user.id }
  }
}

export const authenticationRoute = app => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection('users');

    let user = await collection.findOne({ name: username });

    if (!user) {
      return res.status(500).send("User not found");
    }

    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      return res.status(500).send("Incorrect password");
    }
    let state = await assembleUSerState(user);
    console.log(user)

    res.send({ state });
  })
}
