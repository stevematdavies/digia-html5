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
    const sql = 'SELECT * FROM participant';
    appDb.all(sql, [], (err, rows) => {
        if (err) { 
            res.send(err) 
        }
        else { 
            return res.json([...rows])
         }
    })
}

const addNewParticipant = (res, participant) => {
    const sql = 'INSERT INTO participant (name, email, phone) VALUES (?, ?, ?)';
    let stmt = appDb.prepare(sql);
    stmt.run(participant.name, participant.email, participant.phone);
    stmt.finalize();
    res.send({ "newParticipant" : participant })
}

const deleteParticipant = (res, participantId) => {
    const sql = 'DELETE from participant where id= (?)'
    let stmt = appDb.prepare(sql);
    stmt.run(participantId);
    stmt.finalize();
    res.send("participant successfully deleted!")
}

module.exports = {
    fetchParticipants,
    addNewParticipant,
    deleteParticipant
};

