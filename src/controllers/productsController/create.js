const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");

module.exports = (req,res) => {
    const {name, price, category, description, offer, discount} = req.body;

    const mainImage = req.files.mainImage;
    const images = req.files.images;

    const newProduct = new Product(name, price, category, description, offer, discount, mainImage, images);
    const products = leerJSON('products');

    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')
}