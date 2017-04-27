var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://harsha:harsha@ds145370.mlab.com:45370/mytasklist_sha', ['books']);

// Get All Books
router.get('/books',function(req,res, next){
    db.books.find(function(err,books){
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});

// Get Single Books
router.get('/books/:id',function(req,res,next){
    db.books.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});

// Add Book
router.post('/books',function(req,res,next){
    var book = req.body;
    db.books.save(book,function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});

// Update Book
router.put('/books/:id',function(req,res,next){
    var book = req.body;
    var updBook = {};

    if(book.Title){
        updBook.Title = book.Title;
    }
    if(book.Genre){
        updBook.Genre = book.Genre;
    }
    if(book.Author){
        updBook.Author = book.Author;
    }
    if(book.Pages){
        updBook.Pages = book.Pages;
    }
    if(book.Img_url){
        updBook.Img_url = book.Img_url;
    }
    if(book.Buy_url){
        updBook.Buy_url = book.Buy_url;
    }
    if(!updBook){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }
    else{
        db.books.update({_id: mongojs.ObjectId(req.params.id)},updBook,{},function(err,book){
            if(err){
                res.send(err);
            }
            res.json(book);
        });
    }
});

// Delete Books
router.delete('/books/:id',function(req,res,next){
    db.books.remove({_id: mongojs.ObjectId(req.params.id)},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});


module.exports = router;