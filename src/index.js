const express = require('express');
require('./database/mongoose.js');
const productsRouter = require('./routers/products.router.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(productsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})