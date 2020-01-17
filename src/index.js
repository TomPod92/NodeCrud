const express = require('express');
require('./database/mongoose.js');
require('dotenv').config();

// import routes
const productsRouter = require('./routers/products.router.js');
// create server
const app = express();
const port = process.env.PORT || process.env.LOCAL_PORT;

// apply middleware
app.use(express.json());
app.use(productsRouter);

// listen on server
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})