const db = require('../../database/models'); 

const { leerJSON } = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req,res) => {
    db.Product.findAll()
    .then(products => {
        return res.render("colection", {
            products,
            toThousand,
        })
    })
}