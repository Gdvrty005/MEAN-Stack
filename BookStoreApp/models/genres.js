var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://harsha:harsha@ds145370.mlab.com:45370/mytasklist_sha', ['books']);

// Get All Genres
router.get('/genres',function(req,res, next){
    db.genres.find(function(err,genres){
        if(err){
            res.send(err);
        }
        res.json(genres);
    });
});

// Get Single Genre
router.get('/genres/:id',function(req,res,next){
    db.genres.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,genre){
        if(err){
            res.send(err);
        }
        res.json(genre);
    });
});

// Add Genre
router.post('/genres',function(req,res,next){
    var genre = req.body;
    db.genres.save(genre,function(err,genre){
        if(err){
            res.send(err);
        }
        res.json(genre);
    });
});

// Update Genre
router.put('/genres/:id', function(req,res,next){
    var genre = req.body;
    var updGenre = {};

    if(genre.name){
        updGenre.name = genre.name;
    }
    if(!updGenre){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.genres.update({_id: mongojs.ObjectId(req.params.id)},updGenre,{},function(err,genre){
            if(err){
                res.send(err);
            }
            res.json(genre);
        });
    }
});


// Delete Genre
router.delete('/genres/:id',function(req,res,next){
    db.genres.remove({_id: mongojs.ObjectId(req.params.id)},function(err,genre){
        if(err){
            res.send(err);
        }
        res.json(genre);
    });
});

module.exports = router;