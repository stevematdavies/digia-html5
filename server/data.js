const initialize = require('./database'); 
const _ = require('lodash');
const QUERIES = require('./queries');

const appDb = initialize();

const resultPayload = (title, statusCode, message) => ({title, statusCode, message})

const fetchParticipants = (res, sortOptions) => {
    const {col, dir} = sortOptions;
    const sql = `SELECT * FROM participant ORDER BY ${col} ${dir}`;
    appDb.all(sql, [], (err, rows) => {
        if (err) { 
            res.send(resultPayload('Error getting participants',500, err.message)) 
        } else { 
            return res.json([...rows])
        }
    })
}

const addNewParticipant = (res, participant) => {
    let stmt = appDb.prepare(QUERIES.add_participant);
    stmt.run(participant.name, participant.email, participant.phone,(err, result) => {
        if(err){
            const message = err.errno === 19
                ? 'A Participant with that name and email already exists, your entry will be ignored'
                : err.message;
            res.send(resultPayload('Duplicate Entry', 500, message))
        } else {
            res.send(resultPayload('Participant Added,' ,200,  "Participant successfully added!"))
        }
    });
    stmt.finalize();
}

const updateParticipant = (res, participant) => {
    let stmt = appDb.prepare(QUERIES.update_participant);
    stmt.run(participant.name, participant.email, participant.phone, participant.id,(err,result)=>{
        if (err) {
            res.send(resultPayload('Error',500, error.messge))
        } else {
            res.send(resultPayload('Participant Updated' ,200,  "Participant successfully updated!"))
        }
    });
    stmt.finalize();
   
}

const deleteParticipant = (res, participantId) => {
    let stmt = appDb.prepare(QUERIES.delete_participant);
    stmt.run(participantId,(err,result)=>{
        if (err) {
            res.send(resultPayload('Error',500, error.messge))
        } else {
            res.send(resultPayload('Participant Removed',200,  "Participant successfully removed!"))
        }
    });
    stmt.finalize();
   
}

module.exports = {
    fetchParticipants,
    addNewParticipant,
    deleteParticipant,
    updateParticipant
};

