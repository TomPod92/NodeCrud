const express = require('express');
const router = new express.Router();
const Products = require('../models/products.model.js');

// -------------------Create new product-----------------------
router.post('/products', async (request, response) => {
    const newProduct = new Products(request.body);
    try {
        await newProduct.save();
        response.status(201).send(newProduct);
    } catch (error) {
        response.status(400).send(error)
    }
});

// -------------------Fetch all products-----------------------
router.get('/products', async (request, response) => {
    try {
        const products = await Products.find();
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

// -------------------Fetch product by ID-----------------------
router.get('/products/:id', async (request, response) => {
    try {
        const product = await Products.findById(request.params.id);

        if(!product) response.status(500).send('Product not found');

        response.send(product);
    } catch {
        response.status(500).send('Can find product for some reason')
    }
});

// -------------------Update product by ID-----------------------
router.patch('/products/:id', async (request, response) => {
    const updates = Object.keys(request.body);
    const allowedUpdates = ['name', 'price', 'link', 'keywords'];
    const areUpdatesValid = updates.every( current => allowedUpdates.includes(current));

    if(!areUpdatesValid) response.status(400).send('Invalid updates');

    try {
        const product = await Products.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true
        });

        if(!product) return response.status(404).send();

        response.send(product);
    } catch (error) {
        response.status(500).send('Cant update product for some reason');
        console.log(error)
    }
});

// ---------------------Delete product by ID---------------------
router.delete('/products/:id', async (request, response) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(request.params.id);

        if(!deletedProduct) response.status(404).send('Product not found');

        response.send(deletedProduct);
    } catch (error) {
        response.status(500).send('Can delete product for some reason');
    }
});

module.exports = router;