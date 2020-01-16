const express = require('express');
const router = new express.Router();
const Product = require('../models/products.model.js');

// -------------------Create new product-------------------
router.post('/products', async (request, response) => {
    const newProduct = new Product(request.body);

    try {
        await newProduct.save();
        response.status(201).send(newProduct);
    } catch (error) {
        response.status(400).send(error)
    }
});

// -------------------Fetch all products-------------------
router.get('/products', async (request, response) => {
    try {
        const products = await products.find();
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;