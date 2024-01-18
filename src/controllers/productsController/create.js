const { leerJSON, escribirJSON} = require("../../data");
const Product = require("../../data/product");
const {validationResult} = require('express-validator');
const categories = require('../../data/categories.json');
const fs = require('fs');

module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){

        
        const {name, price, category, description, offer, discount} = req.body;
        
        const {mainImage, images}= req.files;
        
        const newProduct = new Product(name, price, mainImage, images, category, description, offer, discount);
        const products = leerJSON('products');
        
        products.push(newProduct);
        
        escribirJSON(products, 'products')
        
        return res.redirect('/admin')
    }else{
        if(req.files.mainImage){
            fs.existsSync(`./public/images/products/${req.files.mainImage[0].filename}`) &&
            fs.unlinkSync(`./public/images/products/${req.files.mainImage[0].filename}`)
        }
        if(req.files.images){
            fs.existsSync(`./public/images/products/${req.files.images[0].filename}`) &&
            fs.unlinkSync(`./public/images/products/${req.files.images[0].filename}`)
        }
        
        
        return res.render('products/product-add',{
            errors : errors.mapped(),
            old : req.body,
            categories
        })
    }
}