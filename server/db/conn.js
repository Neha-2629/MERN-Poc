const mongoose = require('mongoose');

const mongoURi = process.env.DATABASE;

mongoose.connect(mongoURi)
    .then(client => console.log("Mongo Connected"))
    .catch(err => console.log(err))