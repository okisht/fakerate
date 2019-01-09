const express = require('express');
const router = express.Router();
const FirstModel = require('../models/productmodel');
const viewPage = "<p>test</p>"

// get list from db
router.get('/v1/:productid', function(req, res){
        FirstModel.findOne({productid:req.params.productid}).then(function(model){
            res.send (model +  viewPage);
        });
});


// add new data to db
router.post('/v1', function(req, res){
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