const data = require('./data');

module.exports = (router) => {
    
    router.get('', (req, res)=>{
        return res.send('api heard!')
    });
    
    router.get('/participants', (req, res)=>{
        return res.send(data.generateRandomParticipants());
    });
    
    return router;
}