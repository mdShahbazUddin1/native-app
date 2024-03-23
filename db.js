const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://anshita:anshita@cluster0.go7cetk.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = connection;
