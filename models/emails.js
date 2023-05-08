const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Email {
  constructor(email_to, email_title, description, id) {
    this.email_to = email_to;
    this.email_title = email_title;
    this.description = description;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('emails')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else {
      dbOp = db.collection('emails').insertOne(this);
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

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('emails')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(email => {
        console.log(email);
        return email;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Email;
