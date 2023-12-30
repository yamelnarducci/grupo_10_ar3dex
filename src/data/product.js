const crypto = require('crypto')

function Product(name="", price, category, description, offer, discount) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.price = price;
    this.mainImage = null;
    this.images = [];
    this.category = category;
    this.description = description.trim();
    this.offer = offer;
    this.discount = discount;
}

module.exports = Product