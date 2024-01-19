const { leerJSON, escribirJSON } = require('../../data')
const { existsSync, unlinkSync } = require('fs')


module.exports = (req, res) => {
    const { name, price, category, description, offer, discount } = req.body;

    const { id } = req.params

    const {mainImage, images} = req.files;

    const products = leerJSON('products');

    const productsUpdated = products.map(product => {
        if (product.id == id) {
            product.name = name.trim();
            product.price = price;
            product.mainImage = mainImage ? mainImage[0].filename : null;
            product.images = images ? images.map((image) => image.filename) : [];
            product.category = category;
            product.description = description.trim();
            product.offer = offer;
            product.discount = discount;
        }
        return product
    })


    escribirJSON(productsUpdated, 'products')

    return res.redirect('/admin')
}