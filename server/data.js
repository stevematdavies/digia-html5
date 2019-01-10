const participants = require('./rdata.json');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const appDb = new sqlite3.Database(path.resolve(__dirname, 'app.db'));
const _ = require('lodash');


appDb.serialize(function () {

    appDb.run('CREATE TABLE IF NOT EXISTS participant (id INTEGER PRIMARY KEY AUTOINCREMENT, name string, email string, phone string)');
    
   /*  let stmt = appDb.prepare('INSERT INTO participant (name, email, phone) VALUES (?, ?, ?)');
    _.each(participants, (p) => stmt.run(p.name, p.email, p.phone))
    stmt.finalize(); */


}); 


const fetchParticipants = (res) => {
    appDb.all('SELECT * FROM participant', [], (err, rows) => {
        if (err) { res.send(err) }
        else { return res.json([...rows]) }
    })
}

module.exports = {
    fetchParticipants
};

