const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");

module.exports = (req,res) => {
    const {name, price, category, description, offer, discount} = req.body;

    const {mainImage, images}= req.files;

    const newProduct = new Product(name, price, mainImage, images, category, description, offer, discount);
    const products = leerJSON('products');

    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')
}