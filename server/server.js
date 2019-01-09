const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;

const routes = require('./routes');


app.use(bodyParser.json());
app.use('/api', routes(router));

app.listen(port, ()=> {
    console.log('App up and running on port:' + port);
});


