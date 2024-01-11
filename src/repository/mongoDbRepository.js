const { getDB } = require("../config/databaseConnection");
const { ObjectId } = require("mongodb").ObjectId;

class MongoDbRepository {
  constructor(collectionName) {
    this.collectionName = getDB().collection(collectionName);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collectionName.find({}).toArray((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.collectionName.findOne({ _id: ObjectId(id) }, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  create(opt) {
    return new Promise((resolve, reject) => {
      this.collectionName.insertOne(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
      1;
    });
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      this.collectionName.updateOne(
        { _id: ObjectId(id) },
        { $set: data },
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.collectionName.deleteOne({ _id: ObjectId(id) }, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}

module.exports = MongoDbRepository;