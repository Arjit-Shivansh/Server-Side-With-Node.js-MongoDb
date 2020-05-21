var express = require('express');
var router = express.Router();
var Leaders = require("../models/leaders");

router.all('/',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain'); 
    next();
});


router.get('/',(req,res,next)=>{
    Leaders.find({})
    .then((Leaders)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(Leaders);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/',(req,res,next)=>{
    Leaders.create(req.body)
    .then((leader)=>{
        console.log("Leader Created :" ,leader);
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(leader);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.put('/',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders ");
});

router.delete('/',(req,res,next)=>{
    Leaders.deleteMany({})
    .then((Leaders)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(Leaders);  
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/:leaderId',(req,res,next)=>{
    Leaders.findById(req.params.leaderId)
    .then((leader)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(leader);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/:leaderId',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Post operation not supported on /leader/ " + req.params.leaderId);
});


router.put('/:leaderId',(req,res,next)=>{
    Leaders.findByIdAndUpdate(req.params.leaderId,{$set:req.body},{new: true})
    .then((leader)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(leader);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});

router.delete('/:leaderId',(req,res,next)=>{
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((leader)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(leader);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});

module.exports = router;