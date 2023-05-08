const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(user_id, password, id) {
    this.user_id = user_id;
    this.password = password; 
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('users')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else {
      dbOp = db.collection('users').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('emails')
      .find()
      .toArray()
      .then(emails => {
        console.log(emails);
        return emails;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(user_id,password) {
    const db = getDb();
    return db
      .collection('users')
      .find({ user_id:user_id,password:password })
      .next()
      .then(user => {
        console.log(user);
        // console.log(Object.keys(user).length);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;
