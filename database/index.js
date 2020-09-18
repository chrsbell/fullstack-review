const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  owner: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;