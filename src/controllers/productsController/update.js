const { leerJSON, escribirJSON } = require('../../data')

module.exports = (req, res) => {
    const { name, price, category, description, offer, discount } = req.body;

    const { id } = req.params

    const products = leerJSON('products');

    const productsUpdated = products.map(product => {
        if (product.id == id) {
            product.name = name.trim();
            product.price = price;
            product.mainImage = null;
            product.images = [];
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