
const db = require('../../database/models')

const {validationResult} = require('express-validator');



module.exports = (req,res) => {
    
    const {name, description, price, discount, categoryId } = req.body
    db.Product.create({
        name: name.trim(),
        price,
        discount,
        description : description.trim(),
        categoryId
    })
    .then(newProduct => {
        console.log(req.body)
        return res.redirect("/admin")
    })
    .catch(error => console.log(error))
}

/*



*/