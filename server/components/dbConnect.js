const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/posts";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

let Schema = mongoose.Schema;

let SomeModelSchema = new Schema({
  id: Number,
  description: String,
});

let model = mongoose.model("Posts", SomeModelSchema);

module.exports = model;
