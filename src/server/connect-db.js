import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017/mocdb';

let db = null;

export async function connectDB() {
    let client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    if (db) return db;
    db = client.db();
    console.log("DB Connection Successful -"+ db);
    return db;
}

// connectDB();
