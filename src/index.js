const express = require('express');
require('./database/mongoose.js');

// import routes
const productsRouter = require('./routers/products.router.js');

// create server
const app = express();
const port = process.env.PORT || 3000;

// apply middleware
app.use(express.json());
app.use(productsRouter);

// listen on server
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})