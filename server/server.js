const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;

const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes(router));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
  
app.listen(port, ()=> {
    console.log('App up and running on port:' + port);
});


