const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://Tomek:jyUQ11b0TWcGM7LQ@cluster0-sspir.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbURL, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('we are connected to database')
})