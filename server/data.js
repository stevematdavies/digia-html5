const initialize = require('./database'); 
const _ = require('lodash');
const QUERIES = require('./queries');

const appDb = initialize();

const resultPayload = (statusCode, message) => ({statusCode, message})

const fetchParticipants = (res, sortOptions) => {
    const {col, dir} = sortOptions;
    const sql = `SELECT * FROM participant ORDER BY ${col} ${dir}`;
    appDb.all(sql, [], (err, rows) => {
        if (err) { 
            res.send(resultPayload(500, err.message)) 
        } else { 
            return res.json([...rows])
        }
    })
}

const addNewParticipant = (res, participant) => {
    let stmt = appDb.prepare(QUERIES.add_participant);
    stmt.run(participant.name, participant.email, participant.phone);
    stmt.finalize();
    res.send(resultPayload(200,  "Participant successfully added!"))
}

const updateParticipant = (res, participant) => {
    let stmt = appDb.prepare(QUERIES.update_participant);
    stmt.run(participant.name, participant.email, participant.phone, participant.id);
    stmt.finalize();
    res.send({ statusCode: 200, message: "Participant successfully updated!"})
}

const deleteParticipant = (res, participantId) => {
    let stmt = appDb.prepare(QUERIES.delete_participant);
    stmt.run(participantId);
    stmt.finalize();
    res.send(resultPayload(200,  "Participant successfully removed!"))
}

module.exports = {
    fetchParticipants,
    addNewParticipant,
    deleteParticipant,
    updateParticipant
};

