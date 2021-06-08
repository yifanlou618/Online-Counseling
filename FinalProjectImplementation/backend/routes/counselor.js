var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('../schema/Data');

const dbRoute = 'mongodb+srv://dbUser:dbUserPassword@cluster0.2afja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';//*
mongoose.connect(dbRoute, { useUnifiedTopology: true });//*
let db = mongoose.connection;//*
db.once('open', () => console.log("connected to the database"));//*
db.on('error', console.error.bind(console, 'MongoDB connection error: '));//*

router.get('/counselor/', function(req, res, next) {
    Data.find(function(err, data) {
        if (err) {
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true, info: data })
    });
});

router.post('/counselor/', function(req, res, next) {
    let newName = req.body.name;
    let newPhone = req.body.phone;
    let newEmail = req.body.email;
    let newPrice = req.body.price;
    let newYearOfJoin = req.body.yearOfJoin;

    let newEntry = new Data();
    newEntry.name = newName;
    newEntry.phone = newPhone;
    newEntry.email = newEmail;
    newEntry.price = newPrice;
    newEntry.yearOfJoin = newYearOfJoin;

    newEntry.save((err) => {
        if (err) {
            return res.json({ success: false, error: err });
        } else {
            return res.json({ success: true })
        }
    })
})

router.delete('/counselor/', function(req, res, next) {
    Data.findOneAndRemove({ year: req.body.yearOfJoin }, (err) => {
        if (err) {
            return res.json({ success: false, error: err });
        } 
        return res.json({ success: true })
    });
})

router.put('/counselor/', function(req, res, next) {
    counselor.find();
});

module.exports = router;