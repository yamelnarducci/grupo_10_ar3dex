
const crypto = require('crypto');

function Product(name,price,mainImage, images, category,description, offer, discount) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.mainImage = mainImage ? mainImage[0].filename : null;
    this.images = images ? images.map((image) => image.filename) : [];
    this.category = category;
    this.description = description.trim();
    this.offer = offer || null;
    this.discount = discount;
    
    

}

module.exports = Product