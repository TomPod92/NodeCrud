const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = `mongodb+srv://Tomek:${process.env.DB_PASSWORD}@cluster0-sspir.mongodb.net/nodeCrud?retryWrites=true&w=majority`;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('we are connected to database')
});