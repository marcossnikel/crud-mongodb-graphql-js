const MongoClient = require("mongodb").MongoClient;

let mongodb;

const setupDB = async () => {
  const URI = PROCESS.ENV.MONGODB_URI;

  mongodb = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const getDB = () => {
  return mongodb.db("dbTest")
}

module.exports = { setupDB, getDB };
