const db = require('../database/models')

const {leerJSON} = require('../data');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res) => {

        db.Product.findAll()
        .then(products => {
            return res.render('index', {
                products: products.filter(product => product.offer === "true"),
                toThousand
        })
        

        })
        .catch(error => console.log(error))
        
    },
    cart: (req,res) => {
        return res.render('productCart')
    },
    admin : async(req,res) => {
        try {
            const products = await db.Product.findAll();
            return res.render('dashboard', {
                products
            });
        } catch (error) {
            console.error(error);
        }
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