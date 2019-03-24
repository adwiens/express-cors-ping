const bodyParser = require('body-parser');
const urlExists = require('url-exists');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.warn(req.body);
  urlExists(`http://www.${req.body.domain}`, (err, exists) => {
    if (err) {
      res.json(500, 'Server error!');
    } else {
      res.json(exists);
    }
  });
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
