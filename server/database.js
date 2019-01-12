const participants = require('./rdata.json');
const path = require('path');
const _ = require('lodash');
const sqlite3 = require('sqlite3').verbose();
const appDb = new sqlite3.Database(path.resolve(__dirname, 'app.db'));

const getDb = () => appDb;
const QUERIES = require('./queries');

const createTable = () => {
    const db = getDb();
    db.serialize(function () {
        db.run(`CREATE TABLE IF NOT EXISTS participant (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name string, 
            email string, 
            phone string, 
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)`)
    }); 
}

const migrate = () => {
    const db = getDb();
    let stmt = db.prepare(QUERIES.migrate)
    _.each(participants, (p) => stmt.run(p.name, p.email, p.phone))
    stmt.finalize();
}

const initialize = () => {
    createTable();
    //migrate();  //Uncomment only if you need to rebuild the table! */ 
    return getDb();
}

module.exports = initialize