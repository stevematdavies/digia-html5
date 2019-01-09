const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.get('/api', (req, res)=>{
    return res.send('api heard!')
});

app.listen(port, ()=> {
    console.log('App up and running on port:' + port);
});


