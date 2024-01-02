
const crypto = require('crypto');

function Product(name,price,mainImage, images, category,description, offer, discount) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.mainImage = "img-pdto-1.jpg";
    this.images = [];
    this.category = category;
    this.description = description.trim();
    this.offer = offer || null;
    this.discount = discount.trim();
    
    

}

module.exports = Product