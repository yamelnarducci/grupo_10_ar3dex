const {leerJSON} = require('../data');

module.exports = {
    index: (req,res) => {

        const products = leerJSON('products')
        return res.render('index', {
            products
        })
    },
    cart: (req,res) => {
        return res.render('productCart')
    },
    admin : (req,res) => {
        const products = leerJSON('products')
        return res.render('dashboard',{
            products
        })
    }
}