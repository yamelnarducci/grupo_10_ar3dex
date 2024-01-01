const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

    const {name,price,mainImage, images, category,description, offer, discount} = req.body;

    const {id} = req.params

    const products = leerJSON('products');

    const produtsUpdated = products.map(product => {
        if(product.id == id){
            product.name = name.trim();
            product.price = price.trim();
            product.mainImage = "img-pdto-1.jpg";
            product.images = [];
            product.category = category;
            product.description = description.trim();
            product.offer = offer.trim();
            product.discount = discount.trim();
            
        }
        return product
    })

    escribirJSON(produtsUpdated, 'products')
    

    return res.redirect('/admin')


}