import md5 from 'md5';
import { connectDB } from './connect-db';

async function assembleUserState(user) {
  let db = await connectDB();

  const tasks = await db.collection('tasks').find({ owner: user.id }).toArray();
  const groups = await db.collection('groups').find({ owner: user.id }).toArray();
  const comments = await db.collection('comments').find({ owner: user.id }).toArray();

  return {
    tasks,
    groups,
    session: { authenticated: 'AUTHENTICATED', id: user.id, username: user.name },
    comments
  }
}

export const authenticationRoute = app => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection('users');

    // Check user exists
    let user = await collection.findOne({ name: username });
    if (!user) {
      return res.status(500).send("User not found");
    }
    // Check passwords match
    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;
    if (!passwordCorrect) {
      return res.status(500).send("Incorrect password");
    }

    // If correct password/username, assemble user-specific app state
    let state = await assembleUserState(user);
    res.send({ state });
  })
}
