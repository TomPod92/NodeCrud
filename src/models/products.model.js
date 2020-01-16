const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    keywords: {
        type: Array,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;