const express = require('express');
const bodyParser = require('body-parser');
let app = express();

let db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.sendStatus(201);
  console.log(req.body);
});

app.get('/repos', (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});