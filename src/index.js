const express = require('express');
require('./database/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})