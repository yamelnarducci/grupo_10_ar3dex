
const db = require('../../database/models')
const fs = require('fs')
const {validationResult} = require('express-validator');



module.exports = (req,res) => {
    const errors = validationResult(req);

    const {name, description, price, discount, offer, categoryId } = req.body;
    const mainImage = req.files.mainImage;
    const images = req.files.images;

    if(errors.isEmpty()){

        db.Product.create({
            name: name.trim(),
            price,
            description : description.trim(),
            offer : +offer,
            discount,
            mainImage : mainImage ? mainImage[0].filename : null,
            categoryId
        })
        .then(newProduct => {
            
            this.images = images ? images.map(image => image.filename) : [];
            if(images){
                
                const imagesDB = images.map(image => {
                    return {
                        name : image.filename,
                        id_product : newProduct.id
                    }
                })
                db.Image.bulkCreate(imagesDB, {
                    validate : true
                }).then(result => {
                    console.log(result);
                    return res.redirect("/admin")
                })
            }else{
                return res.redirect("/admin")
            }
        })
        .catch(error => console.log(error))
    }else{
        if (mainImage){
        fs.existsSync(`public/images/products/${mainImage[0].filename}`) &&
        fs.unlinkSync(`public/images/products/${mainImage[0].filename}`);
        }
        if (images){
            images.forEach((image) => {
                fs.existsSync(`public/images/products/${image}`) &&
                fs.unlinkSync(`public/images/products/${image}`);
                
            });
        }

        db.Category.findAll({
            order: [['name']]
          })
            .then(categories => {
              return res.render("products/product-add", {
                errors: errors.mapped(),
                old: req.body,
                categories,
              });
            })
            .catch(error => console.log(error))
       
      }
    };