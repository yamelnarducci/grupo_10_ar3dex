const { leerJSON } = require('../../data')

module.exports = (req,res) => {
        
    const {id} = req.params;

    const products = leerJSON('products');

    const product = products.find(product => product.id === +id)

    const productosRelacionados = products.filter(item => item.category === product.category)

    return res.render('products/product-detail', {
        ...product,
        productosRelacionados
    })
}