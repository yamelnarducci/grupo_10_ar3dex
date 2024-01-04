const { leerJSON } = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req,res) => {

    const products = leerJSON('products')
    return res.render('colection', {
        products,
        toThousand
    })
}