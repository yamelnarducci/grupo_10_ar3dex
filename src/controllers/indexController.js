const db = require('../database/models');

const fs = require('fs');
const path = require('path') 
//const productsFilePath= path.join(__dirname,'../data/products');
//const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res) => {

        db.Product.findAll()
        .then(products => {
            return res.render("colection", {
                products,
                toThousand,
            })
        })
        .catch(error => console.log(error))
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