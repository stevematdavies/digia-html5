const data = require('./data');

module.exports = (router) => {
    
    router.get('', (req, res)=>{
        return res.send('api heard!')
    });
    
    router.get('/participants', (req,res)=>{
        data.fetchParticipants(res);
    });

    router.put('/participants/participant/:k/:v', (req, res) =>{
        const key = req.params.k;
        const val = req.params.v;
        console.log(key, val);
    });
    
    return router;
}