const data = require('./data');

module.exports = (router) => {
    
    router.get('', (req, res)=>{
        return res.send('api heard!')
    });
    
    router.get('/participants/:orderby/:orderdir', (req, res)=>{

        data.fetchParticipants(res, {...req.params});
    });

    router.post('/participants', (req, res) => {
        data.addNewParticipant(res, req.body.participant)
    });

    router.put('/participants', (req, res) => {
        data.updateParticipant(res, req.body.participant)
    });

    router.delete('/participants/:id', (req, res) => {
        data.deleteParticipant(res, req.params.id);
    });

    return router;
}