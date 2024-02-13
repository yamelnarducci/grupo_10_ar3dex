const db = require('../../database/models');

module.exports = (req, res) => {

    Promise.all([
        db.Category.findAll({ order: ['name'] }),
        db.Product.findByPk(req.params.id)
    ])
    .then(([categories, product]) => {
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }


        return res.render('products/product-edit', {
            product, 
            categories,
            name: product.name,
            id: product.id,
            price: product.price,
            discount: product.discount,
            categoryId: product.categoryId,
            offer: product.offer,
            description: product.description
        });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    });
};