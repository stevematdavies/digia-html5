const participants = require('./rdata.json');
const path = require('path');
const _ = require('lodash');
const sqlite3 = require('sqlite3').verbose();
const appDb = new sqlite3.Database(path.resolve(__dirname, 'app.db'));

const getDb = () => appDb;
const QUERIES = require('./queries');

const doMigrate = !!process.argv.slice(1)[1]


const dropTable = () => {
    const db = getDb();
    db.serialize(() => {
        db.run('DROP TABLE IF EXISTS participant')
    });
}

const createTable = () => {
    const db = getDb();
    db.serialize(() => {
        db.run(
            `CREATE TABLE IF NOT EXISTS participant (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name string, 
                email string, 
                phone string, 
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(email, phone))`
            );
    });
}

const migrate = () => {
    dropTable();
    createTable();
    const db = getDb();
    let stmt = db.prepare(QUERIES.migrate)
    _.each(participants, (p) => stmt.run(p.name, p.email, p.phone))
    stmt.finalize();
}

const initialize = () => {
    createTable();
    if (doMigrate) { 
        migrate();
        console.log('migration complete, table refreshed. Please restar the server withut the mograte flag')
    };
    return getDb();
}

module.exports = initialize