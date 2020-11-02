const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')


// @description Fetch all products
// @route       Get api/products
// @access      Public
const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})


// @description Fetch single product
// @route       Get api/products/:id
// @access      Public
const getProductById = asyncHandler( async (req, res) => {
    if(product){
        res.json(product)
    } else {
        res.status(404).json({message: 'Product not found'})
    }
})

module.exports = {
    getProducts,
    getProductById
}