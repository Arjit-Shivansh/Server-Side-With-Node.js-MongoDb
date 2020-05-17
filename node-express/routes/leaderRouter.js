var express = require('express');
var router = express.Router();

router.all('/',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain'); 
    next();
});


router.get('/',(req,res,next)=>{
    res.end("Will send all leaders to you!"); 
});


router.post('/',(req,res,next)=>{
    res.end("Will add the leader "+req.body.name+" with details: "+req.body.description);
});


router.put('/',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders ");
});

router.delete('/',(req,res,next)=>{
    res.end("Deleting all the leaders!"); 
});


router.get('/:leaderId',(req,res,next)=>{
    res.end("Will send details of the leader: " + req.params.leaderId + " to you"); 
});


router.post('/:leaderId',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Post operation not supported on /leader/ " + req.params.leaderId);
});


router.put('/:leaderId',(req,res,next)=>{
    res.write("Updating the leader: " + req.params.leaderId + "\n");
    res.end("Will update the leader: " + req.body.name + " with details: " + req.body.description);
});

router.delete('/:leaderId',(req,res,next)=>{
    res.end("Deleting leader: " + req.params.leaderId); 
});

module.exports = router;