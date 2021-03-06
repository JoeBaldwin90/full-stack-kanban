import { defaultState } from './defaultState.mjs';
import { connectDB } from './connect-db.mjs';

async function initializeDB() {
    let db = await connectDB();
    let user = await db.collection('users').findOne({ id: "U1" });
    if (!user) {
        for (let collectionName in defaultState) {
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();