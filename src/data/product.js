const crypto = require('crypto')

function Product(name, price, category, description, offer, discount, mainImage, images) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.price = price;
    this.mainImage = mainImage ? mainImage[0].filename : null;
    this.images = images ? images.map((image) => image.filename) : [];
    this.category = category;
    this.description = description.trim();
    this.offer = offer;
    this.discount = discount;
}

module.exports = Product