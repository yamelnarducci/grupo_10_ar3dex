const {leerJSON} = require('../data');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res) => {

        const products = leerJSON('products')
        return res.render('index', {
            products,
            toThousand
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
    },
    searchAdmin : (req,res) => {
        const {keyword} = req.query
        const products = leerJSON('products');
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.toLowerCase()) || product.category.toLowerCase().includes(keyword.toLowerCase())
        })
        return res.render('dashboard', {
            products : result,
            keyword
        })
    }
}