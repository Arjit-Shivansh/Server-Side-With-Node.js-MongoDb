var express = require('express');
var router = express.Router();
var Promotions = require("../models/promotions");

router.all('/',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain'); 
    next();
});


router.get('/',(req,res,next)=>{
    Promotions.find({})
    .then((promotions)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotions);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/',(req,res,next)=>{
    Promotions.create(req.body)
    .then((promotion)=>{
        console.log("Promotion Created :" ,promotion);
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotion);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.put('/',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported on /promotions ");
});

router.delete('/',(req,res,next)=>{
    Promotions.deleteMany({})
    .then((promotions)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotions);  
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/:promoId',(req,res,next)=>{
    Promotions.findById(req.params.promoId)
    .then((promotion)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotion);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/:promoId',(req,res,next)=>{
    res.statusCode = 403;
    res.end("Post operation not supported on /promotion/ " + req.params.promoId);
});


router.put('/:promoId',(req,res,next)=>{
    Promotions.findByIdAndUpdate(req.params.promoId,{$set:req.body},{new: true})
    .then((promotion)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotion);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});

router.delete('/:promoId',(req,res,next)=>{
    Promotions.findByIdAndRemove(req.params.promoId)
    .then((promotion)=>{

        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(promotion);
    },(err)=>{
        next(err);
    })
    .catch((err)=>{
        next(err);
    })
});

module.exports = router;