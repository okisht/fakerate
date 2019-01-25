const express = require('express');
const router = express.Router();
const FirstModel = require('../models/productmodel');

// get list from db
router.get('/v1/:productid', function(req, res){
        FirstModel.findOne({productid:req.params.productid}).then(function(model){
            res.send (
                 model
                );
        });
});


// add new data to db
router.post('/v1', function(req, res){
    /* 
    const cursor = db.getCollection('models').find( {"productid" : "pMxPqlB"});
    if (cursor.length > 0)
    { 
            res.send(console.log("this img already uploaded"));
    }
    else {
        FirstModel.create(req.body).then(function(model){
            res.send (model);
        });
    }

    */
    FirstModel.create(req.body).then(function(model){
        res.send (model);
    });
});


// update data in the db
router.put('/v1/:id', function(req, res, next){
    FirstModel.findOneAndUpdate({_id:req.params.id},req.body).then(function() {
        FirstModel.findOne({_id:req.params.id}).then(function(model){
            res.send (model);
        });
    });
});


// delete from db
router.delete('/v1/:id', function(req, res){
    res.send ( {type: "delete"});
});


module.exports = router;