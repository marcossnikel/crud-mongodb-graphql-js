const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let mongodb;

const setupDB = async () => {
  const URI = process.env.MONGODB_URI;

  mongodb = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const getDB = () => {
  return mongodb.db("dbTest");
};

module.exports = { setupDB, getDB };
