const { leerJSON } = require('../data')

module.exports = {
    detail : (req,res) => {
        
        const {id} = req.params;

        const products = leerJSON('products');

        const product = products.find(product => product.id === +id)

        const productosRelacionados = products.filter(item => item.category === product.category)

        return res.render('products/product-detail', {
            ...product,
            productosRelacionados
        })
    },
    add : (req,res) => {
        return res.render('products/product-add')
    },
    edit : (req,res) => {
        const {id} = req.params;

        const products = leerJSON('products');

        const product = products.find(product => product.id === +id)


        return res.render('products/product-edit', {
            ...product
        })
    }

}