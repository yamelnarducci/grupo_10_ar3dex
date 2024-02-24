const productsJSON = require('./src/data/products.json')

imagesDB = productsJSON.ap(product => 
{
    return product.images.map(image => {
        return {
            name : image,
            id_product : product.id,
        }
    })
})


const productsDB = productsJSON.map(({name, price, mainImage, description, offer, discount, category }) => {
    return {
        name: name.trim(),
        price,
        discount,
        description : description.trim(),
        mainImage: mainImage.trim(),
        offer,
        categoryId :  category == "picador" ? 1 : 
        category == "mate" ? 2 : 
        category == "figura" ? 3 : 
        category == "mascara" ? 4 : 
        category == "llavero" ? 5 : "sin_categoria",
        createdAt : new Date(),
        updatedAt : new Date(),
    }
})
console.log(imagesDB)