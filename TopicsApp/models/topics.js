var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://harsha:harsha@ds145370.mlab.com:45370/mytasklist_sha',['topics']);

// Get All Topics
router.get('/topics',function(req,res,next){
    db.topics.find(function(err,topics){
        if(err){
            res.send(err);
        }
        res.json(topics);
    });
});

// Get One Topic
router.get('/topics/:id',function(req,res,next){
    db.topics.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,topic){
        if(err){
            res.send(err);
        }
        res.send(topic);
    });
});

// ADD Topic
router.post('/topics',function(req,res,next){
    var topic = req.body;
    db.topics.save(topic,function(err,book){
        if(err){
            res.send(err);
        }
        res.send(topic);
    });
});

// Update Topic
router.put('/topics/:id',function(req,res,next){
    var topic = req.body;
    var updTopic = {};

    if(topic.title){
        updTopic.title = topic.title;
    }
    if(topic.name){
        updTopic.name = topic.name;
    }
    if(topic.description){
        updTopic.description = topic.description;
    }
    if(!updTopic){
        res.status(400);
        res.json({
            "Error" : "Bad Data"
        });
   }

   db.topics.update({_id: mongojs.ObjectId(req.params.id)},updTopic,{},function(err,topic){
       if(err){
           res.send(err);
       }
       res.json(topic);
   });
});

// Delete Topic
router.delete('/topics/:id',function(req,res,next){
    db.topics.remove({_id: mongojs.ObjectId(req.params.id)},function(err,topic){
        if(err){
            res.send(err);
        }
        res.json(topic);
    });
});



module.exports = router;