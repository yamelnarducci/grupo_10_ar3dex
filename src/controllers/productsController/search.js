const { leerJSON } = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = (req,res) => {

    const {keyword} = req.query;

    const products = leerJSON('products');

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword.toLowerCase()) || 
        product.category.toLowerCase().includes(keyword.toLowerCase()) || 
        product.description.toLowerCase().includes(keyword.toLowerCase())
    })


    return res.render('colection', {
        products : result,
        keyword,
        toThousand
    })
}