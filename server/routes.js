const data = require('./data');
const bodyParser = require('body-parser');

module.exports = (router) => {
    
    router.get('', (req, res)=>{
        return res.send('api heard!')
    });
    
    router.get('/participants', (req, res)=>{
        data.fetchParticipants(res);
    });

    router.post('/participants', (req, res) => {
        data.addNewParticipant(res, req.body.newParticipant)
    });

    router.delete('/participants/:id', (req, res) => {
        data.deleteParticipant(res, req.params.id);
    });

    return router;
}