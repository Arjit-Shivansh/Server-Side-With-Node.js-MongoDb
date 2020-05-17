var express = require('express');
var router = express.Router();

router.all('/',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain'); 
    next();
});


router.get('/',(req,res,next)=>{
    res.end("Will send all promos to you!"); 
});


router.post('/',(req,res,next)=>{
    res.end("Will add the promo "+req.body.name+" with details: "+req.body.description);
});


router.put('/',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported on /promos ");
});

router.delete('/',(req,res,next)=>{
    res.end("Deleting all the promos!"); 
});


router.get('/:promoId',(req,res,next)=>{
    res.end("Will send details of the promo: " + req.params.promoId + " to you"); 
});


router.post('/:promoId',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Post operation not supported on /promo/ " + req.params.promoId);
});


router.put('/:promoId',(req,res,next)=>{
    res.write("Updating the promo: " + req.params.promoId + "\n");
    res.end("Will update the promo: " + req.body.name + " with details: " + req.body.description);
});

router.delete('/:promoId',(req,res,next)=>{
    res.end("Deleting promo: " + req.params.promoId); 
});

module.exports = router;