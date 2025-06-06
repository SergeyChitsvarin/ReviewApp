const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function connectToDatabase() {
  const Db = process.env.ATLAS_URI;
  const client = new MongoClient(Db);

  try {
    await client.connect();
    const connectedDB = await client.db("ReviewAppDB");
    return connectedDB;
  } catch (e) {
    console.error("Database connection failed: ", e.message);
    throw e;
  }
}

module.exports = connectToDatabase;