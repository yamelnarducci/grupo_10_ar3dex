const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

db.Product.destroy({
    where: {
        id: req.params.id
    }
})
.then(response => {
    console.log(response)
    return res.redirect('/products')
})
.catch(error => console.log(error))


}