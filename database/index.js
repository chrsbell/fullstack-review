const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos');

const db = mongoose.connection;

let repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  html_url: { type: String, unique: true },
  owner: String,
  stargazers_count: Number,
  watchers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// saves all of a user's repos to the 'Repo' model of the database
module.exports.save = (repos) => {
  bulkOperations = [];
  // insert document if it doesn't exist, filtered by id, otherwise update it
  repos.forEach(repo => {
    // create a insert/update operation for each repo
    let updateDoc = {
      updateOne: {
        filter: { id: repo.id },
        update: repo,
        upsert: true
      }
    }
    bulkOperations.push(updateDoc);
  });
  return Repo.collection.bulkWrite(bulkOperations)
  .then(res => {
    console.log(`Inserted ${res.nUpserted} documents`);
    console.log(`Updated ${res.nModified} documents`);
  })
  .catch(err => {
    console.log(`Couldn't insert documents`);
  })
};

// gets all repos in database as a query (make more efficient later)
module.exports.get = () => {
  return Repo.find({});
}

module.exports.close = () => {
  db.close();
  console.log(`\nClosing mongoose connection`);
}